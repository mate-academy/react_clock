import React from 'react';

type State = {
  time: string,
};

type Props = {
  clockName: number | string,
};

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timer | null = null ;

  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate({ clockName: previousClockName }: Props) {
    const { clockName: newClockName } = this.props;

    if (previousClockName !== newClockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${previousClockName} to ${newClockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <>
        {time}
      </>
    );
  }
}
