import { createBookingRepo } from '../Repository/createBookingRepo.js';
import { findBookingByCarIdRepo } from '../Repository/findBookingByCarIdRepo.js';
import { HttpStatusCode } from 'axios';
import { obtainDatesOnInterval } from '../../../utils/index.js';
import dayjs from 'dayjs';

export const createBookingService = async bookingPages => {
  try {
    const existentBookingRepo = await findBookingByCarIdRepo(bookingPages);

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
      bookingPages.inicialDateParsed,
      bookingPages.finalDateParsed
    );

    console.log(datesToMark.length);
    const valoresComuns = existentsDates.filter(valor =>
      datesToMark.includes(valor)
    );

    if (valoresComuns.length > 0) {
      throw {
        message: `Reserva marcada entre o dia ${dayjs(
          bookingPages.inicialDateParsed
        ).format('DD-MM-YYYY')} até o dia ${dayjs(
          bookingPages.finalDateParsed
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
    const bookingFromRepo = createBookingRepo(bookingPages);
    if (!bookingFromRepo) {
      throw {
        message: 'Erro ao tratar os dados',
        status: HttpStatusCode.BadRequest,
      };
    }
    return bookingFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
