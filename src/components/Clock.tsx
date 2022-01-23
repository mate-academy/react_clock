import React from 'react';

type State = {
  date: string;
};

class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date().toLocaleTimeString('en-GB'),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(this.syncData, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  syncData = () => {
    const value: string = new Date().toLocaleTimeString('en-GB');

    // eslint-disable-next-line no-console
    console.log(value);

    this.setState({
      date: value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">React Clock</h1>
        <p className="time">
          Current time:
          {' '}
          {this.state.date}
        </p>
      </div>
    );
  }
}

export default Clock;
