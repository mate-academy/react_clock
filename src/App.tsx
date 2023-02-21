import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
  today: Date,
};

export class App extends React.Component<{}, State> {
  timerId = 0;

  timerId2 = 0;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerId2 = window.setInterval(() => {
      const newDate = new Date();

      /* eslint-disable no-console */
      this.setState({ today: newDate });
      console.info(newDate.toUTCString().slice(-12, -4));
    }, 1000);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(_: any, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerId2);

    document.removeEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock, clockName, today } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock" style={{ display: hasClock ? 'block' : 'none' }}>
          <strong className="Clock__name">
            {clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
