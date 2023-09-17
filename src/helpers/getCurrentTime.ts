export function getNewDate() {
  return new Date().toUTCString().slice(-12, -4);
}
