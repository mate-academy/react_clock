import React from 'react';
import { clearInterval } from 'timers';
import './App.scss';

type Props = {
};

type State = {
  date: Date;
  timerId: ReturnType<typeof setInterval>;
  isClockVisible: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    date: new Date(),
    timerId: setInterval(() => {}, 0),
    isClockVisible: true,
  };

  componentDidMount() {
    this.state.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <p>
            {`Current time: ${this.state.date.toLocaleTimeString()}`}
          </p>
        )}
        <button
          type="button"
          onClick={() => {
            this.setState(
              { isClockVisible: true },
            );
          }}
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState(
              { isClockVisible: false },
            );
          }}
        >
          Hide clock
        </button>
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   const timerId: NodeJS.Timer = setInterval(() => {
//     const date: Date = new Date();

//     // eslint-disable-next-line
//     console.log(date.toLocaleTimeString());
//   }, 1000);

//   return (
//     <div className="App">
//       <h1>React clock</h1>
//       <p>
//         Current time:
//       </p>
//     </div>
//   );
// };
