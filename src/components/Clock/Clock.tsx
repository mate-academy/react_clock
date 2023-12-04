import React from 'react';

type Props = {
  name: string,
};

type State = {
  time: string,
};

export class Clock extends React.PureComponent<Props> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerSecondsId = 0;

  componentDidMount(): void {
    this.timerSecondsId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  // eslint-disable-next-line no-console
  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerSecondsId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
