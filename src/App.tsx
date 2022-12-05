/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import Clock from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  clockName: string;
  hasClock: boolean;
  timerID: number;
};

type State = {
  clockName: string;
  timerID: number;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    timerID: 1,
    hasClock: true,
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate = (_prevProps: Props, prevState: Props) => {
    if (prevState.clockName !== this.state.clockName
      && this.state.hasClock === true) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  };

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          clockName={clockName}
          hasClock={hasClock}
        />
      </div>
    );
  }
}
