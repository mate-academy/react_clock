export const formatedDate = (date: Date): string => (
  `${date.toUTCString().slice(-12, -4)}`
);
