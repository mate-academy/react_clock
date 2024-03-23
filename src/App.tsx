import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  today: Date;
  prevClockName: string;
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  timerId = 0;

  state: State = {
    today: new Date(),
    prevClockName: '',
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    const { prevClockName, clockName } = this.state;

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });

      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevClockName} to ${clockName}`);
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: State): void {
    if (prevState.clockName !== this.state.clockName) {
      this.setState({ prevClockName: prevState.clockName });
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);

    window.clearInterval(this.timerId);
  }

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = (): void => {
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { today, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && clockName && <Clock today={today} clockName={clockName} />}
      </div>
    );
  }
}
