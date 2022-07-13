/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    console.log(
      `Old name: ${prevProps.clockName} / New name:${this.props.clockName}`,
    );
  }

  componentWillUnmount() {
    console.log('Remove timer', this.timerId);
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <strong>{this.props.clockName}</strong>
        {' - '}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
