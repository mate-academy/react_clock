import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasCLock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasCLock: true,
  };

  timerId = 0;

  handleSwitchState(state: boolean) {
    this.setState({
      hasCLock: state,
    });
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', () => {
      this.handleSwitchState(true);
    });

    document.addEventListener('contextmenu', () => {
      this.handleSwitchState(false);
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', () => {
      this.handleSwitchState(true);
    });

    document.removeEventListener('contextmenu', () => {
      this.handleSwitchState(false);
    });

    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, hasCLock } = this.state;

    return (
      <div className="app">
        <h1>React clock</h1>

        {hasCLock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
