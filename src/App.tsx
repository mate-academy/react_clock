import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = this.setTimer;

    document.addEventListener('contextmenu', this.handleClick);
    document.addEventListener('click', this.handleClick);
  }

  handlerSetInterval = () => {
    this.setState({ clockName: getRandomName() });
  };

  setTimer = window.setInterval(this.handlerSetInterval, 3300);

  handleClick = (event: MouseEvent) => {
    if (event.type === 'contextmenu') {
      event.preventDefault();
      this.setState({ hasClock: false });

      clearInterval(this.setTimer);
    }

    if (event.type === 'click') {
      this.setState({ hasClock: true });

      this.setTimer = window.setInterval(this.handlerSetInterval, 3300);
    }
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
