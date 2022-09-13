import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('mouseup', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
    const messageDelay = 3300;

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, messageDelay);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
    window.clearInterval(this.timerId);
  }

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    this.setState({ hasClock: false });
    event.preventDefault();
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
