import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type AppType = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent {
  state: AppType = {
    hasClock: true,
    clockName: `Clock-0`,
  };

  intervalId: number | null = null;

  clockNameInterval = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleAddClock = () => {
    this.setState({ hasClock: true });
  };

  handleRemoveClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.intervalId = window.setInterval(this.clockNameInterval, 3300);

    document.addEventListener('contextmenu', this.handleRemoveClock);

    document.addEventListener('click', this.handleAddClock);
  }

  componentWillUnmount(): void {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
    }

    document.removeEventListener('contextmenu', this.handleRemoveClock);
    document.removeEventListener('click', this.handleAddClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock ? <Clock name={this.state.clockName} /> : null}
      </div>
    );
  }
}

// const today = new Date();
// let clockName = 'Clock-0';

// // This code starts a timer
// const timerId = window.setInterval(() => {
//   clockName = getRandomName();
// }, 3300);

// // this code stops the timer
// window.clearInterval(timerId);

// return (
//   <div className="App">
//     <h1>React clock</h1>

//     <div className="Clock">
//       <strong className="Clock__name">{clockName}</strong>

//       {' time is '}

//       <span className="Clock__time">{today.toUTCString().slice(-12, -4)}</span>
//     </div>
//   </div>
// );
