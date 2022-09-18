import './App.scss';
import { Component } from 'react';
import { Clock } from './Clock';

type State = {
  clockName: string,
  hasClock: boolean,
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

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handlerLeftClick);
    document.addEventListener('click', this.handlerRightClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.clockId);
    document.removeEventListener('contextmenu', this.handlerLeftClick);
    document.removeEventListener('click', this.handlerRightClick);
  }

  handlerLeftClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: true });
  };

  handlerRightClick = () => {
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
        && <Clock clock={clockName} />}
      </div>
    );
  }
}
