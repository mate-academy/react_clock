import React from 'react';
import './Clock.scss';

type Props = {
  name: number;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timer = setInterval(() => {
    const { date } = this.state;
    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
    this.setState({ date: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <p className="clock">
        Current time:
        {' '}
        <span className="clock__figures">{date.toLocaleTimeString()}</span>
      </p>
    );
  }
}
