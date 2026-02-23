import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId: ReturnType<typeof setInterval> | null = null;

  get time(): string {
    return this.state.today.toUTCString().slice(-12, -4);
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        // eslint-disable-next-line no-console
        console.log(this.time);
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render(): React.ReactNode {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{this.time}</span>
      </div>
    );
  }
}
