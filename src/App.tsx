import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export type Props = {};

export type State = {
  clockName: string,
  isClock: boolean,
};

export class App extends Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    isClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.pressedRightMouse);

    document.addEventListener('click', this.pressedLeftmouse);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.pressedRightMouse);

    document.addEventListener('click', this.pressedLeftmouse);

    window.clearInterval(this.timerId);
  }

  pressedRightMouse = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClock: false });
  };

  pressedLeftmouse = () => {
    this.setState({ isClock: true });
  };

  render() {
    const { clockName } = this.state;
    const { isClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
