export const getTime = () => {
  return new Date().toUTCString().slice(-12, -4);
};
