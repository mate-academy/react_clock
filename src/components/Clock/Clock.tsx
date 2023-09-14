import React from 'react';

interface Props {
  name: string;
}

interface State {
  currentTime: string;
  previousName: string;
}

export class Clock extends React.Component<Props, State> {
  timerID: number | undefined;

  state = {
    currentTime: Clock.getCurrentTime(),
    previousName: this.props.name,
  };

  static getDerivedStateFromProps(
    nextProps: Props,
    prevState: State,
  ) {
    if (nextProps.name !== prevState.currentTime.split(' ')[0]) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.currentTime.split(' ')[0]} to ${nextProps.name}`);

      return {
        time: `${nextProps.name} ${Clock.getCurrentTime()}`,
      };
    }

    return null;
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.state.previousName && prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.previousName} to ${this.props.name}`);
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
