import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: false,
  };

  timerId = 0;

  onRightClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  onLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.onRightClick);
    document.addEventListener('click', this.onLeftClick);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.onRightClick);
    document.removeEventListener('click', this.onLeftClick);
    window.clearInterval(this.timerId);
  }

  render() {
    return <>{this.state.hasClock && <Clock name={this.state.clockName} />}</>;
  }
}
