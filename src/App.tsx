import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  date: Date,
  clockName: string,
  showClock: boolean,
};

export class App extends React.Component<State> {
  clockName = 'Clock-0';

  state: State = {
    date: new Date(),
    clockName: this.clockName,
    showClock: true,
  };

  timerId = 0;

  interval = 0;

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ showClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ showClock: true });
    });
  }

  componentDidUpdate(_: Readonly<State>, prevState: Readonly<State>) {
    const newName = this.state.clockName;
    const oldName = prevState.clockName;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', () => { });
  }

  render() {
    const { date, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.showClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              {date.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
