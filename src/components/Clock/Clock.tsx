import React from 'react';

type Props = {
  name: string;
  today: Date;
};

type State = {
  tick: number;
};

export class Clock extends React.Component<Props, State> {
  private timerId?: number;

  state: Readonly<State> = {
    tick: 0,
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const tick = this.state.tick + 1;

      const current = new Date(this.props.today.getTime() + tick * 1000);

      // eslint-disable-next-line no-console
      console.log(current.toUTCString().slice(-12, -4));

      this.setState({ tick });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const current = new Date(
      this.props.today.getTime() + this.state.tick * 1000,
    );

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {current.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
