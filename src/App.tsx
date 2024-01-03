import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date,
  clockName: string,
  hasClock: boolean,
};

export class App extends React.PureComponent {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  timerNameId = 0;

  componentDidMount(): void {
    this.setState({ today: new Date() });
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      if (this.state.hasClock) {
        // eslint-disable-next-line
        console.info(this.state.today.toUTCString().slice(-12, -4));
      }
    }, 1000);

    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: State): void {
    if (prevState.clockName
      !== this.state.clockName
      && this.state.hasClock
      && prevProps
    ) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerNameId);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock ? (
          <div className="Clock">
            <strong className="Clock__name">
              {this.state.clockName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )
          : null}

      </div>
    );
  }
}
