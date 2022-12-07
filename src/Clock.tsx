/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const newName = this.props.clockName;
    const oldName = prevProps.clockName;

    if (newName !== oldName) {
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
