import { Component } from 'react';

interface ClockProps {
  name: string;
}

export class Clock extends Component<ClockProps> {
  private intervalId: number | null = null;

  // componentDidMount() {
  //   this.intervalId = window.setInterval(() => {
  //     const currentUtcTime = new Date();

  //     currentUtcTime.setHours(currentUtcTime.getHours() + 2);

  //     this.forceUpdate();
  //     // eslint-disable-next-line no-console
  //     console.info(currentUtcTime.toUTCString().slice(-12, -4));
  //   }, 1000);
  // }

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.forceUpdate();
      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
    }
  }

  render() {
    const { name } = this.props;
    const currentTime = new Date().toUTCString().slice(-12, -4);
    // const currentUtcTime = new Date();

    // currentUtcTime.setHours(currentUtcTime.getHours() + 2);

    // const currentTime = currentUtcTime.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
