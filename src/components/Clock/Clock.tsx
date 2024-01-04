import React from 'react';

type ClockProps = {
  name: string;
};

type State = {
  time: Date,
};

export class Clock extends React.Component<ClockProps, State> {
  state: State = {
    time: new Date(),
  };

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
    }, 1000);
  }

  componentDidUpdate(_prevProps: Readonly<ClockProps>,
    prevState: Readonly<State>): void {
    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeId);
  }

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
