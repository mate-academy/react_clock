/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
  };

  timeTimerId = 0;

  componentDidMount() {
    this.timeTimerId = window.setInterval(this.newInfo, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeTimerId);
  }

  newInfo = () => {
    this.setState({ time: new Date() });
    // eslint-disable-next-line no-console
    console.info(this.state.time.toUTCString().slice(-12, -4));
  };

  render() {
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        <span>&nbsp;time is&nbsp;</span>

        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
