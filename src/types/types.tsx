export type ClockProps = {
  name: string;
};

export type ClockStates = {
  today: Date;
  currentTimer: number;
};

export type AppStates = {
  clockName: string;
  nameChangeTimer: number;
  hasClock: boolean;
};
