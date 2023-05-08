import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  today = new Date();

  timerId = 0;

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.rightClick);
    document.addEventListener('click', this.leftClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.rightClick);
    document.removeEventListener('click', this.leftClick);
    window.clearInterval(this.timerId);
  }

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
