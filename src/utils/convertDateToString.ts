export const convertDateToString = (date: Date) => {
  return date.toUTCString().slice(-12, -4);
};
