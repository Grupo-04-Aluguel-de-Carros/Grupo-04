import { createBookingRepo } from '../Repository/createBookingRepo.js';
import { findBookingByCarIdRepo } from '../Repository/findBookingByCarIdRepo.js';
import { HttpStatusCode } from 'axios';

export const createBookingService = async bookingPages => {
  /* Array não está retornando os matchs corretamente */
  try {
    let bookingPagesToArray = [];
    let bookingsEncoutered = [];
    let existingBookingToCompare;
    let bookingsToArray;
    bookingPagesToArray.push(bookingPages);
    const existentBookingRepo = await findBookingByCarIdRepo(bookingPages);
    if (existentBookingRepo.length > 0) {
      const arrayOfExistingBookings = existentBookingRepo.map(x =>
        x.inicialDate.toLocaleDateString()
      );
      const arrayOfBookingsToMark = bookingPagesToArray.map(x =>
        x.inicialDateParsed.toLocaleDateString()
      );
      for (let i = 0; i < arrayOfExistingBookings.length; i++) {
        existingBookingToCompare = arrayOfExistingBookings[i];
      }
        for (let i = 0; i < arrayOfBookingsToMark.length; i++) {
         bookingsToArray = arrayOfBookingsToMark[i];
        }
          for (let i = 0; i < arrayOfExistingBookings.length; i++) {
            const found = existingBookingToCompare.matchAll(
              bookingsToArray
            );
              for (const match of found) {
                bookingsEncoutered.push(match[0]);
              }
            }
          }
    if (bookingsEncoutered.length > 0){
      throw{
        message: "Datas encontradas",
        status: HttpStatusCode.BadRequest
      }
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
