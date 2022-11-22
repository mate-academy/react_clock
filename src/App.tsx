import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdName = 0;

  componentDidMount() {
    this.timerIdName = window.setInterval(() => {
      this.updateName();
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu
      this.hideClock();
    });

    document.addEventListener('click', () => {
      this.showClock();
    });
  }

  componentWillUnmount(): void {
    clearInterval(this.timerIdName);
  }

  hideClock() {
    this.setState({ hasClock: false });
  }

  showClock() {
    this.setState({ hasClock: true });
  }

  updateName() {
    this.setState({ clockName: getRandomName() });
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
//   const today = new Date();
//   let clockName = 'Clock-0';

//   // This code starts a timer
//   const timerId = window.setInterval(() => {
//     clockName = getRandomName();
//   }, 3300);

//   // this code stops the timer
//   window.clearInterval(timerId);

//   return (
//     <div className="App">
//       <h1>React clock</h1>

//       <div className="Clock">
//         <strong className="Clock__name">
//           {clockName}
//         </strong>

//         {' time is '}

//         <span className="Clock__time">
//           {today.toUTCString().slice(-12, -4)}
//         </span>
//       </div>
//     </div>
//   );
// };
