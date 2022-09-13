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
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ isClock: false });
    });

    document.addEventListener('click', (event) => {
      event.preventDefault();
      this.setState({ isClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ isClock: false });
    });

    document.addEventListener('click', (event) => {
      event.preventDefault();
      this.setState({ isClock: true });
    });

    this.timerId = 0;
  }

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
