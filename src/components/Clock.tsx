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

  timerID = 0;

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      const date = new Date();

      this.setState({ today: date });
      console.info(this.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  get name(): string {
    return this.props.name;
  }

  get time(): string {
    return this.state.today.toUTCString().slice(-12, -4);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.name}
        </strong>

        <span>{' time is '}</span>

        <span className="Clock__time">{this.time}</span>
      </div>
    );
  }
}
