import { Component } from 'react';
import './Clock.scss';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends Component<Props, State> {
  intervalId = 0;

  state: Readonly<State> = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });

      window.console.info(this.getCurrentTime(this.state.currentTime));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name } = this.props;

    if (oldName !== name) {
      window.console.debug(`Renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  getCurrentTime = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock App__clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          { this.getCurrentTime(currentTime) }
        </span>
      </div>
    );
  }
}
