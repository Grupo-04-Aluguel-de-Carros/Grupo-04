import { HttpStatusCode } from 'axios';
import { dateRegex } from '../utils/index.js';
import dayjs from 'dayjs';

export const dateValidation = (req, res, next) => {
  try {
    const { inicialDate, finalDate } = req.body;
    let inicialDateParsed = dayjs(inicialDate).toDate();
    let finalDateParsed = dayjs(finalDate).toDate();
    if (!dateRegex.test(inicialDate)) {
      return res
        .status(HttpStatusCode.BadRequest)
        .json({ message: 'Insira uma data valida' });
    }
    if (dayjs().isAfter(dayjs(inicialDate))) {
      return res
        .status(HttpStatusCode.BadRequest)
        .json({ message: 'Data menor que hoje' });
    }
    req.date = { inicialDateParsed, finalDateParsed };
    next();
  } catch (error) {}
};
