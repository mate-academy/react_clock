import React from 'react';

export interface StateApp {
  isClockVisible: boolean;
}

interface Props {
  state: StateApp;
}

interface State {
  time: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {
    const date: Date = new Date();

    this.setState({ time: new Date().toLocaleTimeString() });

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return setInterval;
  }

  componentWillUnmount() {
    const { state } = this.props;

    if (state.isClockVisible) {
      return clearInterval(this.timerId);
    }

    return null;
  }

  render() {
    const { time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {time}
        </p>
      </div>
    );
  }
}
