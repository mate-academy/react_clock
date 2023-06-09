import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

const getRandomName = (): string => {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
};

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    window.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount(): void {
    window.clearTimeout(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
