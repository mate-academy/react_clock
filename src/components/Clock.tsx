import React from 'react';

function getRandomName(): string {
  const min = 1000;
  const max = 9999;

  return `Clock-${Math.floor(Math.random() * (max - min + 1)) + min}`;
}

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string;
  currentTime: string;
};

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: '',
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({
        clockName,
      });
    }, 3300);

    setInterval(() => {
      if (this.state.hasClock) {
        const currentTime = new Date().toUTCString().slice(-12, -4);

        // eslint-disable-next-line no-console
        console.info(currentTime);
        this.setState({
          currentTime,
        });
      }
    }, 1000);

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // Prevent the default context menu
      this.setState({ hasClock: false });
    });
  }

  componentDidUpdate(_: Readonly<Props>, prevState: Readonly<State>) {
    const { clockName } = this.state;

    if (prevState.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName, currentTime } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>

            {' time is '}

            <span className="Clock__time">{currentTime}</span>
          </div>
        )}
      </div>
    );
  }
}
