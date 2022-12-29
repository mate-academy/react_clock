import React from 'react';

type Props = {
  name: string,
};

type State = {
  timeIsNow: Date | string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    timeIsNow: (new Date()).toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ timeIsNow: (new Date()).toUTCString().slice(-12, -4) });

      // eslint-disable-next-line no-console
      console.info(this.state.timeIsNow);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { timeIsNow } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeIsNow}
        </span>
      </div>
    );
  }
}
