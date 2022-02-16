import React from 'react';

type State = {
  timerId: NodeJS.Timeout,
  date: string,
};

class Clock extends React.Component<{}, State> {
  state = {
    timerId: setInterval(() => {}, 0),
    date: '',
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const date = new Date();

      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  render(): React.ReactNode {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date}
      </p>
    );
  }
}

export default Clock;
