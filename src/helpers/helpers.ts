export function formatTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}
