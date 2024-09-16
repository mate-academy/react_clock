export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export function getActualDate(): string {
  return new Date(Date.now()).toUTCString().slice(-12, -4);
}
