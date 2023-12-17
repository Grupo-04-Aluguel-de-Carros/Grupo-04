/* eslint-disable no-undef */
import { obtainDatesOnInterval } from '../datesOnInterval.js';

describe('obtainDatesOnInterval', () => {
  it('should return an array of dates between initial and final dates', () => {
    const startDate = '2023-01-01';
    const endDate = '2023-01-05';

    const result = obtainDatesOnInterval(startDate, endDate);

    const expectedDates = [
      '2023-01-01',
      '2023-01-02',
      '2023-01-03',
      '2023-01-04',
      '2023-01-05',
    ];

    expect(result).toEqual(expectedDates);
  });

  it('should return an array with a single date if initial and final dates are the same', () => {
    const startDate = '2023-01-01';
    const endDate = '2023-01-01';

    const result = obtainDatesOnInterval(startDate, endDate);

    const expectedDates = ['2023-01-01'];

    expect(result).toEqual(expectedDates);
  });

  it('should return an empty array if initial date is after final date', () => {
    const startDate = '2023-01-05';
    const endDate = '2023-01-01';

    const result = obtainDatesOnInterval(startDate, endDate);

    expect(result).toEqual([]);
  });
});
