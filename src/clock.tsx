import React from "react";

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerIdTime: number | null = null;

  componentDidMount() {
    this.timerIdTime = window.setInterval(() => {
      const currentTime = new Date();
      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
      this.setState({ today: currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerIdTime !== null) {
      window.clearInterval(this.timerIdTime);
    }
  }

  render(): React.ReactNode {
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
