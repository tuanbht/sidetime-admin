export const CURRENT_YEAR_OPTION = (() => {
  const currentYear = new Date().getFullYear();

  return { label: `Jan 1, ${currentYear} - Today`, value: currentYear };
})();
