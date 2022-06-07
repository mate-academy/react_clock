import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (<Clock />)}
        </p>

        <div>
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
        </div>
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
//         {'  '}
//         {/* Print the time here instead of DevTools */}
//         <Clock />
//       </p>
//     </div>
//   );
// };

export default App;
