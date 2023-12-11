import { HttpStatusCode } from 'axios';
import { dateRegex } from '../../utils/index.js';
import { findBookingByIdRepo } from '../../modules/booking/Repository/findBookingByIdRepo.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

export const dateHandle = (req, res) => {
  try {
    /*     let userBookingFinded;
    if (req.params) {
      const { id } = req.params;
      userBookingFinded = await findBookingByIdRepo({ id });
      if (!userBookingFinded) {
        throw {
          message: 'Booking não encontrado',
          status: HttpStatusCode.BadRequest,
        };
      }
    }
 */
    dayjs.extend(utc);
    dayjs.extend(timezone);

    const brazilTime = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;

    const localTime = dayjs.tz(brazilTime, 'Etc/GMT-0');
    localTime.format();

    const { inicialDate, finalDate } = req.body;

    /*     if (!inicialDate) {
      inicialDate = userBookingFinded.inicialDate;
    }
    if (!finalDate) {
      finalDate = userBookingFinded.finalDate;
    }
 */
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
    return { status: res.status(HttpStatusCode.BadRequest), message: false };
  }
};
