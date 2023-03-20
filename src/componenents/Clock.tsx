import { Component } from 'react';

export class Clock extends Component<{}> {
  timerId2 = 0;

  state = {
    today: new Date(),
  };

  componentDidMount() {
    this.timerId2 = window.setInterval(() => {
      const newDate = new Date();

      /* eslint-disable no-console */
      this.setState({ today: newDate });
      console.info(newDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId2);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <span>{' time is '}</span>
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
