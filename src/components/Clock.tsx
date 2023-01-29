import React from 'react';

interface State {
  time: Date,
}

interface Props {
  clockName: string,
}

function getFormatedTime(time: Date) {
  return time.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const { time } = this.state;

      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.info(getFormatedTime(time));
    }, 1000);
  }

  componentDidUpdate({ clockName }: Props) {
    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${clockName} to ${this.props.clockName}`);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getFormatedTime(time)}
        </span>
      </div>
    );
  }
}
