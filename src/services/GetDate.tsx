export function getDate(): string {
  const date = new Date();

  return date.toUTCString().slice(-12, -4);
}
