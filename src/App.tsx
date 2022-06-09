import React from 'react';
// import './App.scss';

import { Clock } from './components/Clock';
// import { Countdown } from './Countdown';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>{`Clock Name: ${clockName}`}</p>
        <p>
          <p>Local time:</p>
          {isClockVisible && (
            <Clock from={clockName} />
          )}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Start
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Stop
        </button>

        {/* <br /> */}

        <button
          type="button"
          onClick={() => this.setState({
            clockName: Math.round(Math.random() * 1000),
          })}
        >
          Random Clock Name
        </button>
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
