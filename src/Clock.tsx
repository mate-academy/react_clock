import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  timeTimerId: number | null = null;

  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timeTimerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({
        currentTime,
      });

      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timeTimerId !== null) {
      window.clearInterval(this.timeTimerId);
    }
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
