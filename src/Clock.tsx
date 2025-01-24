import React from 'react';

type ClockPorops = {
  name: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<ClockPorops, State> {
  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  currentTime = 0;

  componentDidMount(): void {
    this.currentTime = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockPorops>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.currentTime);
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
