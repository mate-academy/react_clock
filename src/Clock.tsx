import { Component } from 'react';

interface IState {
  intervalId: NodeJS.Timer | null;
  today: Date;
}

interface IProps {
  name: string;
}

function getReadableDate(time: Date) {
  return time.toUTCString().slice(-12, -4);
}

function getCurrentTime() {
  return new Date();
}

export class Clock extends Component<IProps, IState> {
  state: IState = {
    intervalId: null,
    today: new Date(),
  };

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.finishInterval();
  }

  updateTime = () => {
    const currentTime = getCurrentTime();

    this.setState({ today: currentTime });
    // eslint-disable-next-line no-console
    console.info(getReadableDate(currentTime));
  };

  startInterval = () => {
    if (this.state.intervalId === null) {
      const interval = setInterval(this.updateTime, 1000);

      this.setState({
        intervalId: interval,
      });
    }
  };

  finishInterval = () => {
    if (typeof this.state.intervalId === 'number') {
      clearInterval(this.state.intervalId);
    }

    this.setState({
      intervalId: null,
    });
  };

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{getReadableDate(today)}</span>
      </div>
    );
  }
}
