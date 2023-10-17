import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

const getRandomName = () => {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
};

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', event => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', event => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
  }

  // componentDidUpdate(
  //   prevState: Readonly<State>,
  // ): void {
  //   // eslint-disable-next-line no-console
  //   console.debug(prevState);
  // }

  // componentWillUnmount(): void {
  //   window.clearInterval(this.timerId);
  // }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   const today = new Date();
//   let clockName = 'Clock-0';

//   // This code starts a timer
//   const timerId = window.setInterval(() => {
//     clockName = getRandomName();
//   }, 3300);

//   // this code stops the timer
//   window.clearInterval(timerId);

//   return (
//     <div className="App">
//       <h1>React clock</h1>

//       <div className="Clock">
//         <strong className="Clock__name">
//           {clockName}
//         </strong>

//         {' time is '}

//         <span className="Clock__time">
//           {today.toUTCString().slice(-12, -4)}
//         </span>
//       </div>
//     </div>
//   );
// };
