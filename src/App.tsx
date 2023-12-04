import React from 'react';
import { Clock } from './Components/Clock/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  timerIdClockName: number | undefined;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    this.timerIdClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleOnClick);
    document.addEventListener('contextmenu', this.handleOnContext);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdClockName);
    document.removeEventListener('click', this.handleOnClick);
    document.removeEventListener('contextmenu', this.handleOnContext);
  }

  handleOnClick = () => {
    this.setState({ hasClock: true });
  };

  handleOnContext = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
