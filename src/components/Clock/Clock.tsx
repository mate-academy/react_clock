import React from 'react';
import './Clock.scss';

type State = {
  currentTime: string,
};

type Props = {
  nameClock: number,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevName: Props) {
    const newName = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevName.nameClock} to ${newName.nameClock}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { nameClock } = this.props;

    return (
      <div className="clock">
        <h2 className="clock__name">{`===${nameClock}===`}</h2>

        <div className="clock__time">{currentTime}</div>
      </div>
    );
  }
}
