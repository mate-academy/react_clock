import { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleClickRight);
    document.addEventListener('click', this.handleClickLeft);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleClickRight);
    document.removeEventListener('click', this.handleClickLeft);
  }

  handleClickRight = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClickLeft = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        { this.state.hasClock && (<Clock name={this.state.clockName} />) }
      </div>
    );
  }
}
