import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  date: Date,
  clockName: string,
  timerId: number,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state = {
    date: new Date(),
    clockName: 'Clock-0',
    timerId: 0,
    hasClock: true,
  };

  componentDidMount() {
    this.state.timerId = window.setInterval(() => {
      const oldName = this.state.clockName;

      this.setState({ clockName: getRandomName() });

      // eslint-disable-next-line no-console
      console.debug(`Перейменовано з ${oldName} на ${this.state.clockName}`);
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
    window.clearInterval(this.state.timerId);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.state;
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {(hasClock)
          ? (
            <div className="Clock">
              <strong className="Clock__name">
                {clockName}
              </strong>

              {' time is '}

              <span className="Clock__time">
                {date.toUTCString().slice(-12, -4)}
              </span>
            </div>
          )
          : ('No clock')}
      </div>
    );
  }
}
