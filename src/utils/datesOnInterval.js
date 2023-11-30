import dayjs from 'dayjs';

export const obtainDatesOnInterval = (inicialDate, finalDate) => {
  const datesOnInterval = [];

  let actualDate = dayjs(inicialDate);

  while (actualDate.isBefore(dayjs(finalDate).add(1, 'day'))) {
    datesOnInterval.push(actualDate.format('YYYY-MM-DD'));

    actualDate = actualDate.add(1, 'day');
  }
  return datesOnInterval;
};
