import { HttpStatusCode } from 'axios';
import { dateRegex } from '../utils/index.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

export const dateValidation = (req, res, next) => {
  try {
    dayjs.extend(utc);
    dayjs.extend(timezone)

    const brazilTime = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;
    const d1 = dayjs.tz(brazilTime, 'Etc/GMT-0')
    d1.format() // => 2013-11-18T11:55:00+08:00
    console.log(d1.toDate().getHours()); 

    const { inicialDate, finalDate } = req.body;
    if (!dateRegex.test(inicialDate) || !dateRegex.test(finalDate)) {
      throw {
        message: 'Insira uma data valida, modelo de data é YYYY-MM-DD',
        status: HttpStatusCode.BadRequest,
      };
    }
    // Analisar data no mesmo dia corrente no postman, está retornando erro de vez em quando de data mais antiga sendo que não faz sentido.
    const utcNormalizer = `T${d1.toDate().getHours()}:${localTime.getMinutes()}:${localTime.getSeconds()}:${localTime.getMilliseconds()}`;

    const finalDateNormalized = `${finalDate}${utcNormalizer}`;

    const inicialDateNormalized = `${inicialDate}${utcNormalizer}`;

    const finalDateParsed = dayjs(finalDateNormalized).toDate();

    const inicialDateParsed = dayjs(inicialDateNormalized).toDate();
    console.log(inicialDateParsed);
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
