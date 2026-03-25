import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  clockTimerId: ReturnType<typeof setInterval> | null = null;

  componentDidMount(): void {
    this.clockTimerId = setInterval(() => {
      const nextTime = new Date();
      const timeString = nextTime.toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(timeString); // Loga ANTES de atualizar o estado

      this.setState({ today: nextTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    // Verifica mudança na prop 'name' em vez do state
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.clockTimerId) {
      clearInterval(this.clockTimerId);
    }
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
