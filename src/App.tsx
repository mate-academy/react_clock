import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type Props = {
};

type State = {
  clockName: string;
  timerID: number;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    timerID: 1,
    hasClock: true,
  };

  render() {
    const {
      hasClock,
      clockName,
      timerID,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          clockName={clockName}
          hasClock={hasClock}
          timerID={timerID}
        />
      </div>
    );
  }
}
