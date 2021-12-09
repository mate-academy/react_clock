import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  isClockVisible: boolean,
  clockNameNumber: number,
};

class App extends React.Component<{}, State> {
  // const timerId: NodeJS.Timer = setInterval(() => {
  //   const date: Date = new Date();

  //   // eslint-disable-next-line
  //   console.log(date.toLocaleTimeString());
  // }, 1000);

  state: State = {
    isClockVisible: true,
    clockNameNumber: 1,
  };

  render() {
    const { isClockVisible, clockNameNumber } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          <strong>
            {`Clock #${clockNameNumber}`}
          </strong>
        </p>
        {isClockVisible && (
          <Clock
            clockName={`Clock #${clockNameNumber}`}
            isVisible={isClockVisible} />
        )}
        <div>
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          {' '}
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>
          {' '}
          <button
            type="button"
            onClick={() => {
              this.setState({ clockNameNumber: Math.floor(Math.random() * 100) });
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
