export type ClockProps = {
  name: string;
};

export interface ClockState {
  currentTime: string;
}

export type AppProps = {};

export interface AppState {
  hasClock: boolean;
  clockName: string;
}
