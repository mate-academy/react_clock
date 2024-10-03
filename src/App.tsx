import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
  currentTime: string;
};

export class App extends React.Component<{}, State> {
  today = new Date().toUTCString().slice(-12, -4);

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: this.today,
  };

  timeId: number | null = null;

  timerId: number | null = null;

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleTimeChange = () => {
    this.today = new Date().toUTCString().slice(-12, -4); // set new time

    if (this.timeId) {
      // eslint-disable-next-line no-console
      console.log(this.today);
    }

    this.setState({ currentTime: this.today });
  };

  handleClocknameChange = () => {
    const { clockName } = this.state;

    const randomName = this.getRandomName();

    // eslint-disable-next-line no-console
    console.warn(`Renamed from ${clockName} to ${randomName}`);
    this.setState({ clockName: randomName });
  };

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();

    if (this.timeId) {
      window.clearInterval(this.timeId);
      this.timeId = null;
    }

    if (this.timerId) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }

    this.setState({ hasClock: false });
  };

  handleDocumentLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    if (!this.timeId) {
      this.handleTimeChange();
      this.timeId = window.setInterval(this.handleTimeChange, 1000);
    }

    if (!this.timerId) {
      this.timerId = window.setInterval(this.handleClocknameChange, 3300);
    }

    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timeId = window.setInterval(this.handleTimeChange, 1000);
    this.timerId = window.setInterval(this.handleClocknameChange, 3300);
    document.addEventListener('contextmenu', this.handleDocumentRightClick);
    document.addEventListener('click', this.handleDocumentLeftClick);
  }

  componentWillUnmount(): void {
    if (this.timeId) {
      window.clearInterval(this.timeId);
    }

    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    document.removeEventListener('click', this.handleDocumentLeftClick);
  }

  render() {
    const { hasClock, clockName, currentTime } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} time={currentTime} />}
      </div>
    );
  }
}
