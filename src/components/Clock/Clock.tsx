/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerTodayId = 0;

  componentDidMount() {
    this.timerTodayId = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerTodayId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {
            today.toUTCString().slice(-12, -4)
          }
        </span>
      </div>
    );
  }
}
