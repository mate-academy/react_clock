/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      console.log(
        `Old name: ${prevProps.clockName} / New name:${this.props.clockName}`,
      );
    }

    console.log(
      `${this.props.clockName} - ${this.state.date.toLocaleTimeString()}`,
    );
  }

  componentWillUnmount() {
    console.log('Remove timer', this.timerId);
    clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div>
        <strong>{clockName}</strong>
        {' - '}
        {date.toLocaleTimeString()}
      </div>
    );
  }
}
