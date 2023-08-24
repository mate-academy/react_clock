import React from 'react';
// import { useState, useEffect } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App
  extends React.PureComponent<{ nothing: () => void }, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | null = null;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  setHasClock = (value: boolean) => {
    this.setState({ hasClock: value });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            clockName={this.state.clockName}
            setHasClock={this.setHasClock}
          />
        )}
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   const [clockName, setClockName] = useState('Clock-0');
//   const [hasClock, setHasClock] = useState(true);

//   useEffect(() => {
//     // This code starts a timer
//     const timerId = window.setInterval(() => {
//       setClockName(getRandomName());
//     }, 3300);

//     // this code stops the timer
//     return () => {
//       window.clearInterval(timerId);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>React clock</h1>

//       {hasClock && (
//         <Clock
//           clockName={clockName}
//           setHasClock={setHasClock}
//         />
//       )}
//     </div>
//   );
// };
