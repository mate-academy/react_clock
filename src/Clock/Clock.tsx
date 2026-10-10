import React from 'react';
import './Clock.scss';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ time });

      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
