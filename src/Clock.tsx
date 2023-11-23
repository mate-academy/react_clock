import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
}

export class Clock extends React.Component<ClockProps,
ClockState> {
  private timerId: NodeJS.Timeout | null = null;

  state = {
    currentTime: new Date().toUTCString().slice(-12,-4),
  };

  componentDidMount() {
    this.timerId = setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to
      ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  updateTime = () => {
    const currentTime = new Date().toUTCString().slice(-12, -4);

    // eslint-disable-next-line no-console
    console.info(`${currentTime}`);
    this.setState({ currentTime });
  };

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
