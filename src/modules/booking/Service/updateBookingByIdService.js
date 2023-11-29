import { updateBookingByIdRepo } from '../Repository/updateBookingByIdRepo.js';
import { obtainDatesOnInterval } from '../../../utils/index.js';
import { findBookingByCarIdRepo } from '../Repository/findBookingByCarIdRepo.js';
import { HttpStatusCode } from 'axios';
import { findBookingByIdRepo } from '../Repository/findBookingByIdRepo.js';
import dayjs from 'dayjs';

export const updateBookingByIdService = async bookingObject => {
  try {
    const existingBookingById = await findBookingByIdRepo(bookingObject.id);

    if (!existingBookingById) {
      throw {
        message: 'Reserva não existente',
        status: HttpStatusCode.BadRequest,
      };
    }

    const existentBookingRepo = await findBookingByCarIdRepo(bookingObject);

    const existentInicialDatesRepos = existentBookingRepo.map(
      existentBookingRepo => existentBookingRepo.inicialDate
    );

    const existentFinalDatesRepos = existentBookingRepo.map(
      existentBookingRepo => existentBookingRepo.finalDate
    );

    const minimalDateToLockTheCalendar = new Date(
      Math.min(...existentInicialDatesRepos)
    );

    const maximumDateToLockTheCalendarnew = new Date(
      Math.max(...existentFinalDatesRepos)
    );

    const existentsDates = obtainDatesOnInterval(
      minimalDateToLockTheCalendar,
      maximumDateToLockTheCalendarnew
    );

    const datesToMark = obtainDatesOnInterval(
      bookingObject.inicialDateParsed,
      bookingObject.finalDateParsed
    );

    const valoresComuns = existentsDates.filter(valor =>
      datesToMark.includes(valor)
    );

    if (valoresComuns.length > 0) {
      throw {
        message: `Reserva marcada entre o dia ${dayjs(
          bookingObject.inicialDateParsed
        ).format('DD-MM-YYYY')} até o dia ${dayjs(
          bookingObject.finalDateParsed
        ).format('DD-MM-YYYY')} não disponivel`,
        status: HttpStatusCode.BadRequest,
      };
    }
    if (datesToMark.length - 1 > 7) {
      throw {
        message: 'Só é possível marcar reservas de 7 dias ao máximo',
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
