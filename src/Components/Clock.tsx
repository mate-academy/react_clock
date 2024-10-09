import React, { Component } from 'react';

interface Props {
  name: string;
}

interface State {
  time: string;
}

export class Clock extends Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  private interval: number | undefined;

  componentDidMount() {
    this.interval = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(time);
      this.setState({ time });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }

  componentDidUpdate(prevProps: Props) {
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
