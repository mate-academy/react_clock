import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  today: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  state:Readonly<ClockState> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date().toUTCString().slice(-12, -4),
      });

      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today}
        </span>
      </div>
    );
  }
}
