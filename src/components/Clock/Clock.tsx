import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  time: string;
}

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const now = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(now);
      this.setState({ time: now });
    }, 1000);
  }

  // this code stops the timer
  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
