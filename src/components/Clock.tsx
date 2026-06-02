import React from 'react';

type Props = {
  name?: string;
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
  };

  timerId: number = 0;

  componentDidMount = () => {
    this.timerId = window.setInterval(() => {
      this.updateTime();
    }, 1000);
  };

  updateTime = () => {
    const newTime = new Date();

    this.setState({ time: newTime });
    // eslint-disable-next-line no-console
    console.log(newTime.toUTCString().slice(-12, -4));
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const timeString = this.state.time.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{timeString}</span>
      </div>
    );
  }
}
