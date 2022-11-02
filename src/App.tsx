import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  date: Date,
};

export class App extends Component<{}, State> {
  state = {
    date: new Date(),
    hasClock: true,
  };

  timerId = 0;

  clockName = 'Clock-0';

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const oldName = this.clockName;

      this.clockName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Перейменовано з ${oldName} на ${this.clockName}`);
    }, 3300);

    window.setInterval(() => {
      this.setState({ date: new Date() });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.date);
      }
    }, 1000);

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
    const { hasClock, date } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
        </div>

        <Clock
          date={date}
          clockName={this.clockName}
          hasClock={hasClock}
          timerId={this.timerId}
        />
      </>
    );
  }
}
