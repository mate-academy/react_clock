import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdChangeClockName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextmenu);
    document.addEventListener('click', this.handleClick);

    this.timerIdChangeClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdChangeClockName);

    document.removeEventListener('contextmenu', this.handleContextmenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextmenu = (event: MouseEvent) => {
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
