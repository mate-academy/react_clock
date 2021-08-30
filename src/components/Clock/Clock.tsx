import React from 'react';
import './Clock.scss';

interface Props {
  name: number;
}

interface State {
  date: Date;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timer = setInterval(() => {
    const { date } = this.state;

    this.setState({ date: new Date() });
    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
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
