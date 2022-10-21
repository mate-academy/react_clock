import React from 'react';
import './App.scss';

type State = {
  time: Date;
  value: string;
  visibility: boolean;
};

type Props = {};

function ClockName(): string {
  const value = Date.now().toString().slice(-4);

  return value;
}

export class App extends React.Component<{}, State> {
  state = {
    time: new Date(),
    value: '0',
    visibility: true,
  };

  timerID?: NodeJS.Timeout;

  valueTimerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.tick();
      },
      1000,
    );

    this.valueTimerId = setInterval(
      () => this.setState({
        value: ClockName(),
      }),
      3300,
    );

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ visibility: false });
    });
    document.addEventListener('click', this.leftMouseButtonHandle);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { value } = prevState;

    if (prevProps && value !== this.state.value && this.state.visibility) {
      // eslint-disable-next-line
      console.debug(`Renamed from Clock-${value} to Clock-${this.state.value}`);
    }
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }

    if (this.valueTimerId) {
      clearInterval(this.valueTimerId);
    }

    document.removeEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ visibility: false });
    });
    document.removeEventListener('click', this.leftMouseButtonHandle);
  }

  rightMouseButtonHandle = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ visibility: false });
  };

  leftMouseButtonHandle = () => {
    this.setState({ visibility: true });
  };

  tick() {
    this.setState({
      time: new Date(),
    });

    if (this.state.visibility) {
      // eslint-disable-next-line
      console.info(this.state.time.toLocaleTimeString());
    }
  }

  render() {
    const { time, value, visibility } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {visibility && (
          <>
            <strong className="Clock">
              Clock-
              {value}
            </strong>
            <span className="Clock__time">
              {` time is ${time.toLocaleTimeString()}`}
            </span>
          </>
        )}
      </div>
    );
  }
}
