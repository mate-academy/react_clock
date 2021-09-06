/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

import React from 'react';

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
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = prevProps;
    const time = this.state.date.toLocaleTimeString();

    return name !== this.props.name
      ? console.log(`The clock was renamed from ${name} to ${this.props.name}`)
      : console.log(time);
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
      <div>
        <h1>
          React clock
          {' '}
          {name}
        </h1>
        <p>
          Current time:
          {' '}
          {time}
        </p>
      </div>
    );
  }
}
