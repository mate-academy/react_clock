import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  state = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
