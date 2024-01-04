import { CURRENT_YEAR_OPTION } from './contants';

export const getYearsFromCreatedYear = (createdYear) => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = currentYear - 1; year >= createdYear; year--) {
    years.push({ label: year.toString(), value: year });
  }

  return [CURRENT_YEAR_OPTION, ...years];
};
