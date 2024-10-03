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

    // eslint-disable-next-line no-console
    console.log(this.today);
    this.setState({ currentTime: this.today });
  };

  handleClocknameChange = () => {
    this.setState({ clockName: this.getRandomName() });
  };

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();

    if (this.timeId) {
      window.clearInterval(this.timeId);
      this.timeId = null;
    }

    this.setState({ hasClock: false });
  };

  handleDocumentLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    if (!this.timeId) {
      this.timeId = window.setInterval(this.handleDocumentLeftClick, 1000);
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
