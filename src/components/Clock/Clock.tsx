import React from 'react';

interface Props {
  name: string;
}

interface State {
  currentTime: string;
}

export class Clock extends React.Component<Props, State> {
  timerID: number | undefined;

  state = {
    currentTime: Clock.getCurrentTime(),
  };

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerID !== undefined) {
      window.clearInterval(this.timerID);
    }
  }

  static getCurrentTime(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  tick() {
    this.setState({
      currentTime: Clock.getCurrentTime(),
    });
    // eslint-disable-next-line no-console
    console.info(this.state.currentTime);
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
