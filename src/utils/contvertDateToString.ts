export const contvertDateToString = (date: Date) =>
  date.toUTCString().slice(-12, -4);
