import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  private timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(newDate);
      this.setState({ time: newDate });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render(): React.ReactNode {
    const { name } = this.props;

    return (
      <div className="clock">
        <span>
          <strong className="Clock__name">{name}</strong> time is{' '}
          <span className="Clock__time">{this.state.time}</span>
        </span>
      </div>
    );
  }
}
