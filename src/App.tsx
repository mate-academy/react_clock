// import React, { useEffect, useState } from 'react';
// import './App.scss';

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

// interface ClockProps {
//   name: string;
// }

// const Clock: React.FC<ClockProps> = ({ name }) => {
//   const [time, setTime] = useState(new Date().toUTCString().slice(-12, -4));
//   const [prevName, setPrevName] = useState(name);

//   useEffect(() => {
//     const timerId = window.setInterval(() => {
//       const newTime = new Date().toUTCString().slice(-12, -4);

//       // eslint-disable-next-line no-console
//       console.log(newTime);
//       setTime(newTime);
//     }, 1000);

//     return () => {
//       window.clearInterval(timerId);
//     };
//   }, []);

//   useEffect(() => {
//     if (prevName !== name) {
//       // eslint-disable-next-line no-console
//       console.warn(`Renamed from ${prevName} to ${name}`);
//       setPrevName(name);
//     }
//   }, [name, prevName]);

//   return (
//     <div className="Clock">
//       <strong className="Clock__name">{name}</strong>
//       {' time is '}
//       <span className="Clock__time">{time}</span>
//     </div>
//   );
// };

// export const App: React.FC = () => {
//   const [hasClock, setHasClock] = useState(true);
//   const [clockName, setClockName] = useState('Clock-0');
//   const [prevClockName, setPrevClockName] = useState(clockName);

//   useEffect(() => {
//     const nameUpdateTimerId = window.setInterval(() => {
//       const newName = getRandomName();

//       // eslint-disable-next-line no-console
//       console.warn(`Renamed from ${prevClockName} to ${newName}`);
//       setPrevClockName(clockName);
//       setClockName(newName);
//     }, 3300);

//     const handleShowClock = () => setHasClock(true);
//     const handleHideClock = (event: MouseEvent) => {
//       event.preventDefault();
//       setHasClock(false);
//     };

//     document.addEventListener('click', handleShowClock);
//     document.addEventListener('contextmenu', handleHideClock);

//     return () => {
//       window.clearInterval(nameUpdateTimerId);
//       document.removeEventListener('click', handleShowClock);
//       document.removeEventListener('contextmenu', handleHideClock);
//     };
//   }, [clockName, prevClockName]);

//   return (
//     <div className="App">
//       <h1>React Clock</h1>
//       {hasClock && <Clock name={clockName} />}
//     </div>
//   );
// };

import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleRightClick);
    document.removeEventListener('contextmenu', this.handleRightClick);

    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
