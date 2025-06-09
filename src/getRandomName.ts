const names = ['Clock-A', 'Clock-B', 'Clock-X', 'Clock-Y', 'Clock-Z'];

export function getRandomName(): string {
  const index = Math.floor(Math.random() * names.length);

  return names[index];
}
