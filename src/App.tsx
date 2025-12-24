import React from 'react';
import './App.scss';
import { Clock } from './components';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameIntervalId: number | undefined;

  componentDidMount(): void {
    document.addEventListener('click', this.handleLMC);
    document.addEventListener('contextmenu', this.handleRMC);

    this.nameIntervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLMC);
    document.removeEventListener('contextmenu', this.handleRMC);

    if (this.nameIntervalId) {
      clearInterval(this.nameIntervalId);
    }
  }

  handleLMC = () => {
    this.setState({ hasClock: true });
  };

  handleRMC = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

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
