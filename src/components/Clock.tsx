/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerForDate = 0;

  componentDidMount() {
    this.timerForDate = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevName: Props) {
    const { name } = this.props;

    if (prevName.name !== name) {
      console.debug(`Renamed from ${prevName.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerForDate);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
