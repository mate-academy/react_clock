import React from 'react';

interface Props {
  name: string;
}
export class Clock extends React.Component<Props> {
  state = {
    clockValue: new Date().toUTCString().toString().slice(-12, -4),
  };

  timerValueId: number = 0;

  componentDidMount(): void {
    this.timerValueId = window.setInterval(() => {
      const clockValue = new Date().toUTCString().toString().slice(-12, -4);

      this.setState({ clockValue });
      // eslint-disable-next-line no-console
      console.log(clockValue);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerValueId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.clockValue}</span>
      </div>
    );
  }
}
