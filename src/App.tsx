import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && (
            <Clock name={clockName} />
          )}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.round(Math.random() * 100) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <h1>React clock</h1>
//       <p>
//         Current time:
//         {' '}
//         <Clock />
//       </p>
//       <button type="button">Show Clock</button>
//       <button type="button">Hide Clock</button>
//     </div>
//   );
// };

export default App;
