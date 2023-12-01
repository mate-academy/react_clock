export type AppState = {
  hasClock: boolean,
  clockName: string,
  intervalId?: number,
};

export type ClockState = {
  time: string,
  clockId?: number,
};

export type ClockProps = {
  name: string;
  intervalId?: number,
};
