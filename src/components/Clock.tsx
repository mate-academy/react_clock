import React from 'react';

type State = {
  time: string;
  timerId: NodeJS.Timeout | null;
};

export class Clock extends React.Component<{}, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: null,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ time: new Date().toLocaleTimeString() });
      }, 1000),
    });
  }

  componentWillUnmount() {
    const { timerId } = this.state;

    if (timerId) {
      clearInterval(timerId);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>{`Current time: ${this.state.time}`}</p>
      </div>
    );
  }
}
