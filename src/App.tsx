import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  render() {
    const handleRight = (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    };

    const handleLeft = () => {
      this.setState({ hasClock: true });
    };

    document.addEventListener('contextmenu', handleRight);
    document.addEventListener('click', handleLeft);

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
