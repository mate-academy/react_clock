import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
};

export default class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  id = 0;

  componentDidMount() {
    this.id = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      //eslint-disable-next-line no-console
      console.log(time);

      this.setState({ time: time });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.id);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>) {
    if (prevProps.name !== this.props.name) {
      //eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
