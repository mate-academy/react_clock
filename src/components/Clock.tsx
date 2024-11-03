import { Component } from 'react';
import { contvertDateToString } from '../utils/contvertDateToString';

interface IProps {
  clockName: string;
}

interface IState {
  today: string;
}

export default class Clock extends Component<IProps, IState> {
  state = { today: contvertDateToString(new Date()) };

  timerId = 0;

  startTimer = () => {
    this.timerId = window.setInterval(() => {
      const date = contvertDateToString(new Date());

      this.setState({ today: date });

      // eslint-disable-next-line no-console
      console.log(date);
    }, 1000);
  };

  stopTimer = () => clearInterval(this.timerId);

  componentDidMount(): void {
    this.startTimer();
  }

  componentDidUpdate(prevProps: Readonly<IProps>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    this.stopTimer();
  }

  render(): React.ReactNode {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
