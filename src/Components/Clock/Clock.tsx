import React from 'react';

type Props = {
  clockName: number;
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timeout;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      // eslint-disable-next-line
      console.log(this.state.date);

      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = prevProps;

    if (clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <>
        {date.toLocaleTimeString()}
        {'  '}
        {clockName}
      </>
    );
  }
}
