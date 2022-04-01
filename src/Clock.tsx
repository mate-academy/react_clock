/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
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
    if (prevProps.name !== this.props.name) {
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      (
        <>
          {date.toLocaleTimeString()}
          {console.log(date.toLocaleTimeString())}
        </>
      )
    );
  }
}
