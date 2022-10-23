import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
  time: Date,
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    time: new Date(),
  };

  timerId?: NodeJS.Timeout;

  valueTimerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(
      () => {
        this.tick();
      },
      1000,
    );

    this.valueTimerId = setInterval(
      () => this.setState({
        clockName: getRandomName(),
      }),
      3300,
    );

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', this.leftButton);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { clockName } = prevState;

    if (prevProps && clockName !== this.state.clockName
      && this.state.hasClock) {
      // eslint-disable-next-line
      console.debug(`Renamed from Clock-${clockName} to Clock-${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    if (this.valueTimerId) {
      clearInterval(this.valueTimerId);
    }

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', this.leftButton);
  }

  leftButton = () => {
    this.setState({ hasClock: true });
  };

  tick() {
    this.setState({
      time: new Date(),
    });

    if (this.state.hasClock) {
      // eslint-disable-next-line
      console.info(this.state.time.toLocaleTimeString());
    }
  }

  render() {
    const { hasClock, clockName, time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              {time.toLocaleTimeString()}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
