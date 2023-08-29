/* eslint-disable no-console */
import React from 'react';

type State = {
  time: Date;
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  intervalID: number | undefined;

  static getRandomName(): string {
    return `Clock-${Date.now().toString().slice(-4)}`;
  }

  componentDidMount() {
    this.intervalID = window.setInterval(this.handleTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    console.info(`${this.state.time.toUTCString().slice(-12, -4)}`);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalID);
  }

  handleTime = () => {
    this.setState({ time: new Date() });
  };

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
