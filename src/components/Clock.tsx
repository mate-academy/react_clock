import React from 'react';

type State = {
  date: Date,
  timerId: NodeJS.Timer | undefined,
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ date: new Date() });
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000),
    });
  }

  componentWillUnmount() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    return this.state.date.toLocaleTimeString();
  }
}
