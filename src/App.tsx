import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

// This code starts a timer

// this code stops the timer
type State = {
  today: Date;
  hasClock: boolean;
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    today: new Date(),
    hasClock: true,
    clockName: 'Clock-0',
  };

  hasClock = true;

  clockName = 'Clock-0';

  timerId: number | null = null;

  // eslint-disable-next-line react/sort-comp
  handlRigthClic = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handlLeftClic = (): void => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    // eslint-disable-next-line no-console
    console.info(this.state.today);
    document.addEventListener('contextmenu', this.handlRigthClic);
    document.addEventListener('click', this.handlLeftClic);

    // Update time every second
    this.timerId = window.setInterval(() => {
      this.setState((prevState) => ({
        today: new Date(),
        clockName: prevState.today.getSeconds() % 3 === 0
          ? getRandomName() : prevState.clockName,
      }));
      // eslint-disable-next-line no-console
      console.info(`Current Time: ${this.state.today.toUTCString()}`);
    }, 1000);
  }

  componentWillUnmount(): void {
    // eslint-disable-next-line no-console
    console.info(this.state.today);

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }

    document.addEventListener('contextmenu', this.handlRigthClic);
    document.addEventListener('click', this.handlLeftClic);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
