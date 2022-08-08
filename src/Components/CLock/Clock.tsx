/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  name: string;
};

export class Clock extends Component<Props, {}> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      console.log(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
