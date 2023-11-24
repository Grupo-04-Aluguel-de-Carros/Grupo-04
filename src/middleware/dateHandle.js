import { HttpStatusCode } from 'axios';
import { dateRegex } from '../utils/index.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

export const dateValidation = (req, res, next) => {
  try {
    dayjs.extend(utc);
    const localTime = dayjs.utc().local().toDate();

    const { inicialDate, finalDate } = req.body;

    if (!dateRegex.test(inicialDate) || !dateRegex.test(finalDate)) {
      throw {
        message: 'Insira uma data valida',
        status: HttpStatusCode.BadRequest,
      };
    }
    // Analisar data no mesmo dia corrente no postman, está retornando erro de vez em quando de data mais antiga sendo que não faz sentido.
    const finalDateParsed = dayjs(finalDate).toDate();

    const transformingToUTC = `${inicialDate}T${localTime.getHours()}:${localTime.getMinutes()}:${localTime.getSeconds()}:${localTime.getMilliseconds()}`;

    const inicialDateParsed = dayjs(transformingToUTC).toDate();

    if (dayjs().isAfter(dayjs(inicialDateParsed))) {
      throw {
        message: 'Data inserida é mais antiga que a data atual',
        status: HttpStatusCode.BadRequest,
      };
    }
    req.date = { inicialDateParsed, finalDateParsed };
    next();
  } catch (error) {
    console.log('Error ==> ', error);
    return res.status(error.status).json({ message: error.message });
  }
};
