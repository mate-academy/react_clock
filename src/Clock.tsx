import React from 'react';
import './App.scss';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  state = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    // This code starts a timer
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
