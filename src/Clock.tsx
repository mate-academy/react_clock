/* eslint-disable no-console */
import { Component } from 'react';

export interface State {
  today: Date,
}
export interface Props {
  name: string,
}

class Clock extends Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  todayTimerId = 0;

  componentDidMount(): void {
    this.todayTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevP: Readonly<Props>): void {
    if (prevP.name !== this.props.name) {
      console.debug(`Renamed from ${prevP.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.todayTimerId);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export default Clock;
