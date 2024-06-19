import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  public readonly state: State = {
    today: new Date(),
  };

  timerIdDate = 0;

  handleTimers() {
    this.timerIdDate = window.setInterval(() => {
      this.setState(prev => ({ ...prev, today: new Date() }));
    }, 1000);
  }

  componentDidUpdate(): void {
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  }

  componentDidMount(): void {
    this.handleTimers();
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdDate);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
