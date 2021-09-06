import React from 'react';

type Props = {
  randName: number,
};

type State = {
  date: string
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  settedInterval: number | undefined;

  componentDidMount() {
    this.settedInterval = window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.randName !== this.props.randName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.randName} to ${this.props.randName}`);
    }
  }

  componponentWillUnmount() {
    return clearInterval(this.settedInterval);
  }

  render() {
    return (
      <>
        <h1>
          React clock
          {' '}
          {this.props.randName}
        </h1>
        <p className="time">
          Current time:
          {' '}
          {this.state.date}
        </p>
      </>
    );
  }
}
