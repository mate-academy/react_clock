import { Component } from 'react';

import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName:string,
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

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      // const { clockName: currClockName } = this.state;

      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleLeftMouse);
    document.addEventListener('contextmenu', this.handleRightMouse);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftMouse);
    document.removeEventListener('contextmenu', this.handleRightMouse);
    window.clearInterval(this.clockId);
  }

  handleLeftMouse = () => {
    this.setState({ hasClock: true });
  };

  handleRightMouse = (event: MouseEvent) => {
    this.setState({ hasClock: false });
    event.preventDefault();
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
