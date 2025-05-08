import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  isClockShown: boolean;
  today: Date;
  clockName: string;
};

const DEFAULT_CLOCK_NAME = 'Clock-0';

export class App extends React.Component<Props, State> {
  state: State = {
    isClockShown: true,
    today: new Date(),
    clockName: DEFAULT_CLOCK_NAME,
  };

  clockIntervalId = 0;

  nameIntervalId = 0;

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockShown: false, clockName: DEFAULT_CLOCK_NAME });
  };

  handleDocumentClick = () => {
    if (this.state.isClockShown) {
      return;
    }

    this.setState({ isClockShown: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleDocumentRightClick);
    document.addEventListener('click', this.handleDocumentClick);

    this.clockIntervalId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
    }, 1000);

    this.nameIntervalId = window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    document.removeEventListener('click', this.handleDocumentClick);

    window.clearInterval(this.clockIntervalId);
    window.clearInterval(this.nameIntervalId);
  }

  render() {
    const { isClockShown, today, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockShown && <Clock name={clockName} today={today} />}
      </div>
    );
  }
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
//         <strong className="Clock__name">{clockName}</strong>

//         {' time is '}

//         <span className="Clock__time">
//           {today.toUTCString().slice(-12, -4)}
//         </span>
//       </div>
//     </div>
//   );
// };
