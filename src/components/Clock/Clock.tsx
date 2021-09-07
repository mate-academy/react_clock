/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import './Clock.scss';

type Props = {
  name: number,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  interval: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date() });
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = prevProps;

    if (name !== this.props.name) {
      console.log(`The clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const time = this.state.date.toLocaleTimeString();
    const { name } = this.props;

    return (
      <div className="clock">
        <h1 className="clock__title">
          React clock
          {' '}
          {name}
        </h1>
        <p className="clock__time">
          Current time:
          {' '}
          <strong>
            {time}
          </strong>
        </p>
      </div>
    );
  }
}
