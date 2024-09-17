export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}
