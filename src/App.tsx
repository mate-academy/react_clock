import './App.scss';
import { Component } from 'react';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { clockName, hasClock } = this.state;

    return ((
      <div className="App">
        <h1>React clock</h1>
        { hasClock && (
          <Clock name={clockName} />)}
      </div>
    ));
  }
}
