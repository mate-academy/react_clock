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

  timerIdTime = 0;

  componentDidMount() {
    this.timerIdTime = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });

      console.info(date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdTime);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
