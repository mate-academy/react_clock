import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.PureComponent<Props> {
  state = {
    timer: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ timer: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.log(this.state.timer);
    }, 1000);
  }

  componentWillUnmount(): void {
    // eslint-disable-next-line no-console
    console.log(this.state.timer);
    window.clearInterval(this.timerId);
  }

  render() {
    const { timer } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}

        <span className="Clock__time">{timer}</span>
      </div>
    );
  }
}
