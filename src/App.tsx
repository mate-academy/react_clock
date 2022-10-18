import React from 'react';
import './App.scss';

type State = {
  time: Date;
  value: string;
  visibility: boolean;
};

function ClockName(): string {
  const value = Date.now().toString().slice(-4);

  return value;
}

export class App extends React.Component<{}, State> {
  state = {
    time: new Date(),
    value: '',
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

    document.addEventListener('contextmenu', this.rightMouseButtonHandle);
    document.addEventListener('click', this.leftMouseButtonHandle);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }

    if (this.valueTimerId) {
      clearInterval(this.valueTimerId);
    }

    document.removeEventListener('contextmenu', this.rightMouseButtonHandle);
    document.removeEventListener('click', this.leftMouseButtonHandle);
  }

  rightMouseButtonHandle = () => {
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
      console.log(this.state.time.toLocaleTimeString());
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
