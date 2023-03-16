import React from 'react';

type State = {
  today: Date;
};

export class Clock extends React.Component<{}, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });

      window.console.info(this.shortDate);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  get shortDate() {
    return this.state.today.toUTCString().slice(-12, -4);
  }

  render() {
    const clockName = 'Clock-0';

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.shortDate}
        </span>
      </div>
    );
  }
}
