import React from 'react';

type State = {
  todayTime: string;
};

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: State = {
    todayTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        todayTime: new Date().toUTCString().slice(-12, -4),
      });

      // eslint-disable-next-line no-console
      console.info(this.state.todayTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { todayTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {todayTime}
        </span>
      </div>
    );
  }
}
