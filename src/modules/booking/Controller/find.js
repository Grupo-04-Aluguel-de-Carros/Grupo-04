import { HttpStatusCode } from 'axios';
import { findAllBookingService } from '../Service/findAllBookingService.js';

export const findAll = async (req, res) => {
  try {
    const { currentPage, listPerPage, offset } = req.pagination;

    const bookingResult = await findAllBookingService({
      currentPage,
      listPerPage,
      offset,
    });

    return {
      data: res.status(HttpStatusCode.Ok).json({
        pageRecords: bookingResult.bookingResultFromRepo.booking.length,
        currentPage: currentPage,
        totalPages: bookingResult.totalPages,
        totalRegisters: bookingResult.bookingResultFromRepo.total,
        allBookings: bookingResult.bookingResultFromRepo.booking,
      }),
    };
  } catch (error) {
    console.log('Error ==>', error);
    return res.status(error.status).json({ message: error.message });
  }
};
