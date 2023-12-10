import { HttpStatusCode } from 'axios';
import { dateRegex } from '../utils/index.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

export const dateHandle = (req, res, next) => {
  try {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    const brazilTime = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;

    const localTime = dayjs.tz(brazilTime, 'Etc/GMT-0');
    localTime.format();

    const { inicialDate, finalDate } = req.body;

    if (!dateRegex.test(inicialDate) || !dateRegex.test(finalDate)) {
      throw {
        message: 'Insira uma data valida, modelo de data é YYYY-MM-DD',
        status: HttpStatusCode.BadRequest,
      };
    }

    const utcNormalizer = `T${localTime.toDate().getHours()}:${localTime
      .toDate()
      .getMinutes()}:${localTime.toDate().getSeconds()}:${localTime
      .toDate()
      .getMilliseconds()}`;

    const finalDateNormalized = `${finalDate}${utcNormalizer}`;

    const inicialDateNormalized = `${inicialDate}${utcNormalizer}`;

    const finalDateParsed = dayjs(finalDateNormalized).toDate();

    const inicialDateParsed = dayjs(inicialDateNormalized).toDate();

    if (dayjs().isAfter(dayjs(inicialDateParsed))) {
      throw {
        message: 'Data inserida é mais antiga que a data atual',
        status: HttpStatusCode.BadRequest,
      };
    }

    if (dayjs(inicialDate).toDate() > dayjs(finalDate).toDate()) {
      throw {
        message: 'Data inicial não pode ser maior que a data final',
        status: HttpStatusCode.BadRequest,
      };
    }
    req.date = { inicialDateParsed, finalDateParsed };
    return req.date;
  } catch (error) {
    console.log('Error ==> ', error);
    return res.status(error.status).json({ message: error.message });
  }
};
