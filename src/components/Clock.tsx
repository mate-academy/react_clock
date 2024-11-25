/* eslint-disable no-console */
import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
  isShow: boolean
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId: number | null = 0;

  updateCurrentTime() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      if (this.props.isShow) {
        console.log(new Date().toUTCString().slice(-12, -4));
      }

    }, 1000);
  }

  componentDidMount(): void {
    this.updateCurrentTime();
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
