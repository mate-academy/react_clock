import React from 'react';

type State = {
  timerId:NodeJS.Timeout,
  currTime:string,
};

type Props = {};

export class Clock extends React.Component<Props, State> {
  state = {
    timerId: setTimeout(() => {}, 0),
    currTime: '',
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
    return (
      <p>
        Current time:
        {' '}
        {this.state.currTime}
      </p>
    );
  }
}
