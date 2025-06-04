import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  intervalId: number | undefined;

  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  updateTime = () => {
    const currentTime = new Date().toUTCString().slice(-12, -4);
    this.setState({ time: currentTime });

    // eslint-disable-next-line no-console
    console.log(currentTime);
  };

  componentDidMount() {
    this.intervalId = window.setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <p className="Clock__time">{time}</p>
        <p className="Clock__name">{name}</p>
      </div>
    );
  }
}
