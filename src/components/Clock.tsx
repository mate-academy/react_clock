import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props> {
  state: State = {
    currentTime: new Date(),
  };

  timerIdTime = 0;

  componentDidMount(): void {
    // This code starts a timer
    this.timerIdTime = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (this.state.currentTime !== prevState.currentTime) {
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime.toUTCString().slice(-12, -4));
    }

    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerIdTime);
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
