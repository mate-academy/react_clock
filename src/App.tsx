import { Component } from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleDocClick);

    document.addEventListener('contextmenu', (event: Event) => {
      event.preventDefault();
      this.handleDocContextmenu();
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleDocContextmenu);
    document.removeEventListener('click', this.handleDocClick);
    window.clearInterval(this.timerId);
  }

  handleDocContextmenu = () => {
    this.setState({ hasClock: false });
  };

  handleDocClick = () => {
    this.setState({ hasClock: true });
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
