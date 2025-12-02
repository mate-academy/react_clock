import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  timerClock: number | null = null;

  componentDidMount(): void {
    this.timerClock = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerClock != null) {
      clearInterval(this.timerClock);
    }
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
