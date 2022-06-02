import React from 'react';
import './App.scss';
import { Clock } from './Clock';

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
//         {/* <Clock count={} /> */}
//       </p>
//     </div>
//   );
// };

// const App: React.FC = () => {
//   let counter = 1;

//   setInterval(() => {
//     counter += 1;
//     console.log(counter);
//   }, 1000)

//   return (
//     <div className="App">
//       {counter}

//       <Clock count={counter} />
//     </div>
//   );
// };

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="title">React clock</h1>
        {isClockVisible && (
          <Clock />
        )}

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
          className="button__item"
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
          className="button__item"
        >
          Show clock
        </button>
      </div>
    );
  }
}
export default App;
