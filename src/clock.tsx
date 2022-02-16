import React from 'react';

type State = {
  currTime: string
  timerId: NodeJS.Timeout
};

export class Clock extends React.Component {
  state: State = {
    currTime: 'Time...',
    timerId: setTimeout(() => {}, 0),
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ currTime: date.toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { currTime } = this.state;

    return (
      <>
        <p>{`Current time: ${currTime}`}</p>
      </>
    );
  }
}
