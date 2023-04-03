export function getRandomName(): string {
  const formattedDate = Date.now().toString().slice(-4);

  return `Clock-${formattedDate}`;
}
