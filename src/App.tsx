import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clock: string;
  hasClock: boolean;
};

type Props = {};

export class App extends Component<Props, State> {
  state = {
    clock: 'Clock-0',
    hasClock: true,
  };

  timerName = 0;

  componentDidMount() {
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);
    this.timerName = window.setInterval(() => {
      this.setState({
        clock: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerName);
    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('click', this.rightClick);
  }

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  rightClick = (event: MouseEvent) => {
    this.setState({ hasClock: false });
    event.preventDefault();
  };

  render() {
    const { clock, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
        && <Clock clock={clock} />}
      </div>
    );
  }
}
