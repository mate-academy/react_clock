/* eslint-disable no-console */
import React from 'react';

type State = {
  today: string;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number | null = 0;

  handleTimer() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: newTime });
    }, 1000);
  }

  handleClearTimer() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  componentDidMount(): void {
    this.handleTimer();
  }

  componentWillUnmount(): void {
    this.handleClearTimer();
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevState.today !== this.state.today) {
      console.log(this.state.today);
    }

    if (prevProps.name !== this.props.name) {
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
