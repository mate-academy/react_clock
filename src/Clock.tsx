import React from 'react';

export interface ClockProps {
  name: string;
}

export interface ClockState {
  currentTime: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps, prevState: ClockState) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.currentTime !== this.state.currentTime) {
      // eslint-disable-next-line no-console
      console.debug(this.state.currentTime);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
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
