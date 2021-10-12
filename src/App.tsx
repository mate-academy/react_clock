import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  isClockVisible: boolean,
  clockName: number
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>{`React clock ${clockName}`}</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && (<Clock name={clockName} />)}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: !isClockVisible });
          }}
        >
          {isClockVisible ? 'Hide Clock' : 'Show Clock'}
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

// const App1: React.FC = () => {
//   window.setInterval(() => {
//     const date = new Date();
//
//     // eslint-disable-next-line
//     console.log(date.toLocaleTimeString());
//   }, 1000);
//
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
