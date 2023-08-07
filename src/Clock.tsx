import React from 'react';

function getCurrentClockTime() {
  return new Date().toUTCString().slice(-12, -4);
}

type ClockProps = {
  name: string
};

export class Clock extends React.Component<ClockProps> {
  state = {
    time: getCurrentClockTime(),
    timeUpdaterId: -1,
  };

  componentDidMount() {
    this.setState({
      timeUpdaterId: window.setInterval(() => {
        const time = getCurrentClockTime();

        // eslint-disable-next-line no-console
        console.info(time);
        this.setState({
          time,
        });
      }, 1000),
    });
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timeUpdaterId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
