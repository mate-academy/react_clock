/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  timerId?: NodeJS.Timer;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;

    return (
      (
        <>
          {date.toLocaleTimeString()}
        </>
      )
    );
  }
}
