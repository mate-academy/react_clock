import React from 'react';
import './Clock.scss';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
  timerId: NodeJS.Timer;
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date().toLocaleTimeString(),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
      this.setState({ currentTime: date.toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="clock">
        <h3 className="clock__name">
          {name}
        </h3>
        <p className="clock__time">
          {`Current time: ${currentTime}`}
        </p>
      </div>
    );
  }
}
