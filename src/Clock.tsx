import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<Props> {
  state: Readonly<State> = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    // This code starts a timer
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevState.currentTime !== this.state.currentTime) {
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
