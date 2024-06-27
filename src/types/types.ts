export type AppState = {
  clockName: string;
  hasClock: boolean;
};

export type ClockProps = AppState & {};

export type ClockState = {
  time: string;
};
