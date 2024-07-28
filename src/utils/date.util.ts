import dayjs from 'dayjs';

const DATE_FORMAT = 'YYYY. MM. DD';

export const getFormattedDate = (date: string) => {
  return dayjs(date).format(DATE_FORMAT);
};
