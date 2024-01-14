/* eslint-disable no-console */
// import React, { useEffect, useState } from 'react';
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

// export const App: React.FC = () => {
//   const [hasClock, setHasClock] = useState(true);
//   const [clockName, setClockName] = useState('Clock-0');

//   useEffect(() => {
//     const handleClick = (event: MouseEvent) => {
//       event.preventDefault();
//       setHasClock(true);
//       console.log('left button');
//       console.log(hasClock);
//       if (event.button === 2) {
//         setHasClock(false);
//         console.log('right button');
//       }
//     };

//     const handleContextMenu = (event: MouseEvent) => {
//       event.preventDefault();
//       setHasClock(false);
//       console.log('right button');
//     };

//     const timerClockName = window.setInterval(() => {
//       const newName = getRandomName();

//       console.debug(`Renamed from ${clockName} to ${newName}`);
//       setClockName(newName);
//     }, 3300);

//     document.addEventListener('click', handleClick);
//     document.addEventListener('contextmenu', handleContextMenu);

//     return () => {
//       window.clearInterval(timerClockName);
//       document.removeEventListener('click', handleClick);
//       document.removeEventListener('contextmenu', handleContextMenu);
//     };
//   }, [clockName, hasClock]);

//   return (
//     <div className="App">
//       <h1>React clock</h1>

//       {hasClock && (
//         <Clock
//           hasClock={hasClock}
//           clockName={clockName}
//         />
//       )}
//       {/* <Clock
//         hasClock={hasClock}
//         clockName={clockName}
//       /> */}
//     </div>
//   );
// };

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component< {}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerClockName = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.timerClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: Readonly<{}>,
    prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerClockName) {
      window.clearInterval(this.timerClockName);
    }

    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
    if (event.button === 2) {
      this.setState({ hasClock: false });
    }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            hasClock={hasClock}
            clockName={clockName}
          />
        )}
      </div>
    );
  }
}
