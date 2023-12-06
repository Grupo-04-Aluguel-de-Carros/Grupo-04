import { createBookingRepo } from '../Repository/createBookingRepo.js';
import { findBookingByCarIdRepo } from '../Repository/findBookingByCarIdRepo.js';
import { HttpStatusCode } from 'axios';
import { obtainDatesOnInterval } from '../../../utils/index.js';
import { findUserByIdRepo } from '../../users/Repository/findUserByIdRepo.js';
import { findCarByIdRepo } from '../../car/Repository/findCarByIdRepo.js';
import dayjs from 'dayjs';

export const createBookingService = async bookingObject => {
  try {
    const verifyUserExistent = await findUserByIdRepo(bookingObject.userId);

    if (!verifyUserExistent) {
      throw {
        message: 'User id não existente',
        status: HttpStatusCode.BadRequest,
      };
    }
    const existentCarFromId = await findCarByIdRepo(bookingObject.carId);

    if (!existentCarFromId) {
      throw {
        message: 'Car id não existente',
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

    const maximumDateToLockTheCalendar = new Date(
      Math.max(...existentFinalDatesRepos)
    );

    const existentsDates = obtainDatesOnInterval(
      minimalDateToLockTheCalendar,
      maximumDateToLockTheCalendar
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
        ).format(
          'DD-MM-YYYY'
        )} não disponivel. Temos reservas a partir do dia ${dayjs(
          maximumDateToLockTheCalendar
        )
          .add(2, 'day')
          .format('DD-MM-YYYY')}`,
        status: HttpStatusCode.BadRequest,
      };
    }
    if (datesToMark.length - 1 > 7) {
      throw {
        message: 'Só é possível marcar reservas de 7 dias ao máximo',
        status: HttpStatusCode.BadRequest,
      };
    }
    const bookingFromRepo = await createBookingRepo(bookingObject);
    return {
      booking: bookingFromRepo,
      car: existentBookingRepo[0].Car,
    };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
