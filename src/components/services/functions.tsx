export function getCurrentTime(): string {
  const today = new Date();

  return today.toUTCString().slice(-12, -4);
}

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}
