/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  timer = 0;

  state = {
    today: new Date(),
  };

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { today } = this.state;

    return (
      <span className="Clock__time">{today.toUTCString().slice(-12, -4)}</span>
    );
  }
}
