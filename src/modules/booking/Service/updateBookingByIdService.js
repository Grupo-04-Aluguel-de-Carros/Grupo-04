import { updateBookingByIdRepo } from '../Repository/updateBookingByIdRepo.js';
import { obtainDatesOnInterval } from '../../../utils/index.js';
import { findBookingByCarIdRepo } from '../Repository/findBookingByCarIdRepo.js';
import { HttpStatusCode } from 'axios';
import { findBookingByIdRepo } from '../Repository/findBookingByIdRepo.js';
import dayjs from 'dayjs';

export const updateBookingByIdService = async bookingObject => {
  try {
    const existentBookingById = await findBookingByIdRepo(bookingObject);

    if (!existentBookingById) {
      throw {
        message: 'Reserva não existente',
        status: HttpStatusCode.BadRequest,
      };
    }

    const allBookingsWithCarIdFromUpdate = await findBookingByCarIdRepo(
      existentBookingById.carId
    );

    const existentInicialDatesRepos = allBookingsWithCarIdFromUpdate.map(
      allBookingsWithCarIdFromUpdate =>
        allBookingsWithCarIdFromUpdate.inicialDate
    );

    const existentFinalDatesRepos = allBookingsWithCarIdFromUpdate.map(
      allBookingsWithCarIdFromUpdate => allBookingsWithCarIdFromUpdate.finalDate
    );

    const minimalDateToLockTheCalendar = new Date(
      Math.min(...existentInicialDatesRepos)
    );

    const maximumDateToLockTheCalendar = new Date(
      Math.max(...existentFinalDatesRepos)
    );

    const bookingAlreadyCreated = obtainDatesOnInterval(
      existentBookingById.inicialDate,
      existentBookingById.finalDate
    );

    const existentsDates = obtainDatesOnInterval(
      minimalDateToLockTheCalendar,
      maximumDateToLockTheCalendar
    );

    const datesToMark = obtainDatesOnInterval(
      bookingObject.inicialDateParsed,
      bookingObject.finalDateParsed
    );

    const resultFromDateToMark = datesToMark.filter(
      date => !bookingAlreadyCreated.includes(date)
    );

    if (resultFromDateToMark.length > 0) {
      const verifyDaysAlreadyMarked = resultFromDateToMark.filter(date =>
        existentsDates.includes(date)
      );

      if (verifyDaysAlreadyMarked.length > 0) {
        throw {
          message: `A sua reserva vai do dia ${dayjs(
            existentBookingById.inicialDate
          ).format('DD/MM/YYYY')} ao dia ${dayjs(
            existentBookingById.finalDate
          ).format(
            'DD/MM/YYYY'
          )} .Já existe uma reserva marcada para os dias escolhidos, caso queria outra data, escolha uma data a partir do dia ${dayjs(
            maximumDateToLockTheCalendar
          )
            .add(2, 'day')
            .format('DD/MM/YYYY')}`,
          status: HttpStatusCode.BadRequest,
        };
      }
    }

    if (datesToMark.length > 7) {
      throw {
        message: 'Só é possível marcar reservas de 7 dias no máximo',
        status: HttpStatusCode.BadRequest,
      };
    }
    if (datesToMark.length > existentsDates.length && datesToMark.length > 7) {
      throw {
        message: `Reserva marcada entre o dia ${dayjs(
          bookingObject.inicialDateParsed
        ).format('DD-MM-YYYY')} até o dia ${dayjs(
          bookingObject.finalDateParsed
        ).format('DD-MM-YYYY')} não disponivel.`,
        status: HttpStatusCode.BadRequest,
      };
    }
    const bookingFromRepo = await updateBookingByIdRepo(bookingObject);
    return bookingFromRepo;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
