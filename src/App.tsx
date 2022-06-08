import React from 'react';
import './App.scss';

import { Countdown } from './Countdown';

interface State {
  isStarted: boolean,
  limit: number,
}

class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    limit: 5,
  };

  render() {
    const { isStarted, limit } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isStarted: true,
            });
          }}
        >
          Start
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              isStarted: false,
            });
          }}
        >
          Stop
        </button>

        <br />

        <button
          type="button"
          onClick={() => this.setState({ limit: 10 })}
        >
          10
        </button>

        {isStarted && (
          <Countdown from={limit} />
        )}
      </div>
    );
  }
}
// const timerId: NodeJS.Timer = setInterval(() => {
//   const date: Date = new Date();

//   // eslint-disable-next-line
//   console.log(date.toLocaleTimeString());
// }, 1000);

// eslint-disable-next-line
  // console.log(timerId);

// };

export default App;
