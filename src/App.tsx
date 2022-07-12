import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    // // const date = new Date();
    // // const clockName = getRandomName();

    // // This code starts a timer
    // const timerId = window.setInterval(() => {
    //   // ...
    // }, 1000);

    // // this code stops the timer
    // clearInterval(timerId);

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

export default App;
