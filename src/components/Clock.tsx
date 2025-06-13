import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props> {
  private clockId: number = 0;

  componentDidMount(): void {
    this.clockId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newTime });
      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  state: Readonly<State> = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
