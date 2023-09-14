import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { DELAY_TO_CHANGE_NAME } from './utils/vars';

type TState = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<{}, TState> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.startTimerName();

    document.addEventListener('contextmenu', this.handleContextmenu);
    document.addEventListener('click', this.handleDocumentClickToShowClock);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleContextmenu);
    document.removeEventListener('click', this.handleDocumentClickToShowClock);
    window.clearInterval(this.timerId);
  }

  startTimerName = () => {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, DELAY_TO_CHANGE_NAME);
  };

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleDocumentClickToShowClock = () => {
    if (this.state.hasClock) {
      return;
    }

    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            clockName={clockName}
          />
        )}
      </div>
    );
  }
}
