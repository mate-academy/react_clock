import React from 'react';
import './Clock.scss';

type Props = {
  name: string;
};

type State = {
  time: Date
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  interval: number | undefined;

  componentDidMount(): void {
    this.interval = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    } else {
      // eslint-disable-next-line no-console
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  updateTime = (): void => {
    this.setState({ time: new Date() });
  };

  render(): React.ReactNode {
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
