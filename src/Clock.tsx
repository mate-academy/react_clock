import React from 'react';

type State = {
  date: Date,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;
/* eslint-disable no-console */
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        <span>{' time is '}</span>

        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
