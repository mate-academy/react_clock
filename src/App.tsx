import React from 'react';
import './App.scss';
import Clock from './components/Clock';

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

type Props = {
};

type State = {
  clockName: string;
  today: Date;
  timerID: number;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    today: new Date(),
    timerID: 1,
    hasClock: true,
  };

  render() {
    const {
      hasClock,
      clockName,
      today,
      timerID,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          clockName={clockName}
          today={today}
          hasClock={hasClock}
          timerID={timerID}
        />
      </div>
    );
  }
}
