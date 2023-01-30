import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
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
