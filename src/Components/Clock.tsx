import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  private timerId: number | null = null;

  state: State = { today: new Date() };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const nameChanged = prevProps.name !== this.props.name;

    if (nameChanged) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState({ today: new Date() }, () => {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    });
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
