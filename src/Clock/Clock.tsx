import { Component } from 'react';

interface Props {
  name: string,
}

type State = {
  date: Date,
};

export class Clock extends Component <Props, State> {
  state = {
    date: new Date(),
  };

  timerId = setInterval(() => {
    this.setState({ date: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timerId;
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="clock">
        <strong>{name}</strong>
        {' time is '}
        {date.toLocaleTimeString()}

        {/* eslint-disable-next-line no-console */}
        {console.log(name, date.toLocaleTimeString())}
      </div>
    );
  }
}
