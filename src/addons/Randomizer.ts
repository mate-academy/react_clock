export class Randomizer {
  public static readonly names = [
    'Arbiter',
    'BEKA',
    'Bodet',
    'Edwards Signaling',
    'EL',
    'Galleon',
    'Gorgy',
    'Hager',
    'Heol',
    'RTK',
    'Schweitzer',
    'SIMEX',
  ];

  static getRandomName = () => {
    return (Randomizer.names)[
      Math.floor(Math.random() * Randomizer.names.length)
    ];
  };
}
