export function getCurrentTime() {
  return new Date().toUTCString().slice(-12, -4);
}
