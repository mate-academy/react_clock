import { Component } from 'react';

import './styles/imports.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
  timerId: number,
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
    timerId: 0,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleClick);

    this.state.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  handleContextMenu = (ev: MouseEvent) => {
    ev.preventDefault();
    this.hideClock();
  };

  handleClick = () => {
    this.appearClock();
  };

  hideClock() {
    this.setState({ hasClock: false });
  }

  appearClock() {
    this.setState({ hasClock: true });
  }

  componentWillUnmpunt() {
    window.clearInterval(this.state.timerId);

    document.removeEventListener('contextmenu', this.handleContextMenu);

    document.removeEventListener('click', this.handleClick);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="wrapper">
        <div className="App">
          <h1>React clock</h1>
          {hasClock && <Clock name={clockName} />}
        </div>
      </div>
    );
  }
}
