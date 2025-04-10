import React from 'react';

type Props = {
  hasClock: boolean;
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  timeTimerId = 0;

  state: State = {
    time: new Date(),
  };

  componentDidMount() {
    this.timeTimerId = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevState.time !== this.state.time && this.props.hasClock) {
      // eslint-disable-next-line no-console
      console.log(this.state.time.toUTCString().slice(-12, -4));
    }

    if (prevProps.name !== this.props.name && this.props.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeTimerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
