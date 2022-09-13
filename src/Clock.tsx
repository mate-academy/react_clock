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

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      console.info(today.toLocaleTimeString());

      this.setState({ today });
    }, 1000);
  }

  componentDidUpdate(prevProp: Props) {
    const { name: prevName } = prevProp;
    const { name: nextName } = this.props;

    if (prevName !== nextName) {
      console.debug(`Renamed from ${prevName} to ${nextName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;
    const timeString = today.toLocaleTimeString();

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeString}
        </span>
      </div>
    );
  }
}
