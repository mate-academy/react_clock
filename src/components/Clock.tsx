import React from 'react';
import './Clock.scss';

interface Props {
  name: string;
}

interface State {
  time: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="clock">
        <h2 className="clock__title">
          {name}
        </h2>
        <p className="clock__text">
          {`It's ${time} now!`}
        </p>
      </div>
    );
  }
}
