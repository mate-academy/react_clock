import React from "react";

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  tick = () => {
    const newDate = new Date().toUTCString().slice(-12, -4);

    this.setState({ today: newDate });

    // eslint-disable-next-line no-console
    console.log(`${newDate}`);
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {" time is "}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
