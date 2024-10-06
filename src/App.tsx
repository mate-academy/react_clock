import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};
type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock } = this.state;

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
