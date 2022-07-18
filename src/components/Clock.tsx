import React from 'react';

type Props = {
  clockName: string,
};

export class Clock2 extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  timerId = window.setInterval(() => {
    this.setState({ date: new Date() });
  }, 1000);

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <strong>{this.props.clockName}</strong>
        {' time is '}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
