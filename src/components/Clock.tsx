import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(currentTime);
      this.setState({ time: currentTime });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
