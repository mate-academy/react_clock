import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

function getFormattedTime(time: Date): string {
  return time.toUTCString().slice(-12, -4);
}

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({
        time: today,
      });
      // eslint-disable-next-line no-console
      console.log(`${getFormattedTime(today)}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{getFormattedTime(time)}</span>
      </div>
    );
  }
}
