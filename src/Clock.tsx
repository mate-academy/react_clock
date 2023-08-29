import React from 'react';

type State = {
  time: Date,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>,
    prevState: Readonly<State>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
