import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {
  name?: string;
};

type State = {
  hasClock: boolean;
  clockName: string;
  currentTime: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number | null = null;

  clockNameTimerId: number | null = null;

  handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  getRandomName = () => {
    const value: string = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  componentDidMount() {
    this.clockNameTimerId = window.setInterval(() => {
      const newClockName = this.getRandomName();

      this.setState({ clockName: newClockName });
      // eslint-disable-next-line no-console
      // console.debug(newClockName);
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'contextmenu',
      this.handleContextMenu as unknown as EventListener,
    );
    document.removeEventListener('click', this.handleClick as EventListener);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
