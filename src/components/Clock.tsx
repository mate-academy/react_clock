import React from 'react';

export class Clock extends React.Component<{name: string}, {time: string}> {
  private timerId: number | null = null;

  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newTime });

      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: { name: string }) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
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
