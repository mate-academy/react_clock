import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  currentTime: Date;
};


const getTime = (time: Date) => time.toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate = (
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ) => {
    if (getTime(prevState.currentTime) !== getTime(this.state.currentTime)) {
      // eslint-disable-next-line no-console
      console.log(getTime(this.state.currentTime));
    }

    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  };

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{getTime(currentTime)}</span>
      </div>
    );
  }
  
}
