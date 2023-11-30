export function getTime() {
  const today = new Date();

  return today.toUTCString().slice(-12, -4);
}
