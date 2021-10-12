/* eslint-disable no-console */
import React from 'react';

type State = {
  time: string;
};

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  timeInterval: number | undefined;

  componentDidMount() {
    this.timeInterval = window.setInterval(() => {
      const { time } = this.state;

      this.setState({ time: new Date().toLocaleTimeString() });

      console.log(time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName: oldName } = prevProps;
    const { clockName: newName } = this.props;

    if (prevProps.clockName !== this.props.clockName) {
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    const { time } = this.state;

    return (
      <>
        { time }
      </>
    );
  }
}
