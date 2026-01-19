import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  timerId: number | null = null;

  state: State = {
    currentTime: new Date(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));

      this.setState({ currentTime: now });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
