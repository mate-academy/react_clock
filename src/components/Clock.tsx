import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  time: string;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timer: undefined | number;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      const updatedTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(updatedTime);
      this.setState({ time: updatedTime });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  render() {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
