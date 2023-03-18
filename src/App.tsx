import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  prevClockName: string;
};

export class App extends Component<{}, State> {
  // // This code starts a timer
  // const timerId = window.setInterval(() => {
  //   clockName = getRandomName();
  // }, 3300);

  // // this code stops the timer
  // window.clearInterval(timerId);
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    prevClockName: '',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.watchVisibilityOff);
    document.addEventListener('click', this.watchVisibilityOn);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    this.state.prevClockName = prevState.clockName;
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.watchVisibilityOff);
    document.removeEventListener('click', this.watchVisibilityOn);
  }

  watchVisibilityOff = (event: Event) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  watchVisibilityOn = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
