import React from 'react';

type State = {
  time: string;
  timer: NodeJS.Timeout | null;
};

type Props = {
  time: string;
  name: number | null;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: this.props.time,
    timer: null,
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);

    this.setState({ timer: timerId });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    const { timer } = this.state;

    if (timer) {
      clearInterval(timer);
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
