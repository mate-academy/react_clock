/* eslint-disable no-console */
import { Component } from 'react';

function formatTimezone(value: Date) {
  return value.toLocaleTimeString();
}

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends Component<Props, State> {
  state: Required<State> = {
    today: new Date(),
  };

  todayTimerId = 0;

  componentDidMount() {
    this.todayTimerId = window.setInterval(() => {
      const { today } = this.state;

      this.setState({ today: new Date() });
      console.info(formatTimezone(today));
    }, 1000);
  }

  componentDidUpdate(prev: Props) {
    const { name } = this.props;

    if (name !== prev.name) {
      console.debug(`Renamed from ${prev.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.todayTimerId);
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
          {formatTimezone(today)}
        </span>
      </div>
    );
  }
}
