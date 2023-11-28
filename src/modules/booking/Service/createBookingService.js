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

    console.log('existentsDates', existentsDates);
    console.log('datesToMark', datesToMark);

    let returnOnlyLetters = '(d+)s*:s*([^,[]]+)';
    for (let i = 0; i < existentsDates.length; i++) {
      const sameDates = existentsDates[i].match(datesToMark[i]);
      console.log(sameDates[0]);
    }
    // if (bookingsEncoutered.length > 0) {
    //   throw {
    //     message: 'Datas encontradas',
    //     status: HttpStatusCode.BadRequest,
    //   };
    // }
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
