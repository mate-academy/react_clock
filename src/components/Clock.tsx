import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  timerId: number = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {new Date().toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
