import React from 'react';

type State = {
  name: string;
  time: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  timerId?: number;

  state: State = {
    name: '',
    time: new Date(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({ time: today });
      // eslint-disable-next-line no-console
      console.log(today.toUTCString().slice(-12, -4));
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

        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
