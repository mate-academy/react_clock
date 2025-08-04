import React from 'react';
type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timer: number = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.log(this.state.time.toUTCString().slice(-12, -4));
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
