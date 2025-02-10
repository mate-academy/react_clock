import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
  timerId: number;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: new Date().toUTCString().slice(-12, -4),
    timerId: 0,
  };

  componentDidMount(): void {
    const timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(newTime);
      this.setState({ time: newTime });
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
