import React from 'react';
import { Clock } from './Components/Clock/Clock';
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};
export class App extends React.Component {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, hasClock } = this.state;

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      if (event.button === 2) {
        this.setState({ hasClock: false });
      }
    });

    document.addEventListener('click', (event: MouseEvent) => {
      if (event.button === 0) {
        this.setState({ hasClock: true });
      }
    });

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock hasClock={hasClock} clockName={clockName} />}
      </div>
    );
  }
}
