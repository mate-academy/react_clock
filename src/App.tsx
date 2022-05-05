import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName:number,
};
class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 7),
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 7) });
  };

  render() {
    return (

      <div className="App">
        <h1>{this.state.clockName}</h1>
        {this.state.isClockVisible && (
          <Clock name={this.state.clockName} />
        )}
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.changeName}
        >
          ChangeName
        </button>
      </div>
    );
  }
}

// const App: React.FC = () => {
//   const timerId: NodeJS.Timer = setInterval(() => {
//     const date: Date = new Date();

//     // eslint-disable-next-line
//     console.log(date.toLocaleTimeString());
//   }, 1000);

//   // eslint-disable-next-line
//   console.log(timerId);

//   return (
//     <div className="App">
//       <h1>React clock</h1>
//       <p>
//         Current time:
//         {' '}
//         {/* Print the time here instead of DevTools */}
//       </p>
//     </div>
//   );
// };

export default App;
