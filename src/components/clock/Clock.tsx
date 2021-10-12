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

      // eslint-disable-next-line
      console.log(time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    const { time } = this.state;

    return (
      <span style={{ color: 'yellowgreen', fontWeight: 700 }}>
        { time }
      </span>
    );
  }
}
