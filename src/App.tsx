import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

// export const App: React.FC = () => {
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

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component< {}, State > {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  currentName = '';

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    this.timerId = window.setInterval(() => {
      this.currentName = getRandomName();
      this.setState({ clockName: this.currentName });
    }, 3300);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>
        {hasClock && <Clock name={clockName} /> }
      </div>
    );
  }
}
