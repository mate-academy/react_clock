import { Component } from 'react';

export class Clock extends Component<{ name: string }> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        time: new Date().toUTCString().slice(-12, -4),
      });

      // eslint-disable-next-line no-console
      console.log('Current time:', this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<{ name: string }>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }
  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
