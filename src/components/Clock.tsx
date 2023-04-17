import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  time: string;
}

const getTime = () => new Date().toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state = {
    time: getTime(),
  };

  interval = 0;

  componentDidMount() {
    this.interval = window.setInterval(() => {
      const time = getTime();

      this.setState({ time });

      // eslint-disable-next-line
      console.info(time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
