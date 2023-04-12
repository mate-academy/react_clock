export const convertDate = (date: Date) => {
  return date.toUTCString().slice(-12, -4);
};
