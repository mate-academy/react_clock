import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const oldName = this.state.clockName;

      this.setState({ clockName: getRandomName() });

      // eslint-disable-next-line no-console
      console.debug(`Перейменовано з ${oldName} на ${this.state.clockName}`);
    }, 3300);

    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
        </div>

        <Clock
          clockName={clockName}
          hasClock={hasClock}
        />
      </>
    );
  }
}
