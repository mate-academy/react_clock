import { Component } from 'react';
import './App.scss';
import { Clock } from './clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdChangeName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.timerIdChangeName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdChangeName);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }
  // this code stops the timer

  timerId = () => {
    window.setInterval(() => {
      this.state.clockName = getRandomName();
    }, 3300);
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
