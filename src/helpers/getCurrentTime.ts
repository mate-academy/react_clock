export function getCurrentTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}
