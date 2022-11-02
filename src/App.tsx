import React from 'react';
import { Clock } from './Clock';
import './App.scss';

export type State = {
  clockId: number,
  hasClock: boolean,
};

function getRandomId(): number {
  const value = Date.now().toString().slice(-4);

  return +value;
}

export class App extends React.Component<{}, State> {
  state = {
    clockId: 0,
    hasClock: true,
  };

  updateName = 0;

  componentDidMount() {
    this.updateName = window.setInterval(() => {
      this.setState({
        clockId: getRandomId(),
      });
    }, 3300);

    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({
        hasClock: false,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock id={this.state.clockId} />}
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   const today = new Date();
//   let clockId = 'Clock-0';

//   // This code starts a timer
//   const timerId = window.setInterval(() => {
//     ;
//   }, 3300);

//   // this code stops the timer
//   window.clearInterval(timerId);
//
// };
