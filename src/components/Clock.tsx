import React from 'react';

type Props = {
  hasClock: boolean,
  clockName: string,
};

type State = {
  today: Date,
  timerId: number,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    this.state.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.info(this.state.today.toUTCString().slice(-12, -4));
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
