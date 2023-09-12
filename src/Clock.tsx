/* eslint-disable no-console */
import { Component } from 'react';

type State = {
  date: Date;
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      console.info(this.getFormatedTime(this.state.date));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getFormatedTime = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getFormatedTime(date)}
        </span>
      </div>
    );
  }
}
