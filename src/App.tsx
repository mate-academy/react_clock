import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: Math.ceil(Math.random() * 10),
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
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
            this.setState({ clockName: Math.ceil(Math.random() * 10) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

// const App: React.FC = () => {
//   // setInterval(() => {
//   //   const date = new Date();

//   //   // eslint-disable-next-line
//   //   console.log(date.toLocaleTimeString());
//   // }, 1000);

//   return (
//     <div className="App">
//       <h1>React clock</h1>
//       <p>
//         Current time:
//         {' '}
//         <Clock />
//         {/* Print the time here instead of DevTools */}
//       </p>
//     </div>
//   );
// };

// export default App;
