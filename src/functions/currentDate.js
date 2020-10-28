export const getCurrentDate = () => {
  const date = new Date();

  return date.toLocaleTimeString();
};
