import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: '',
    intervalId: undefined,
    isClockVisible: true,
    clockName: 0,
  }

  componentDidMount() {
    this.runTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    const { clockName } = this.state;
    const oldClockName = prevState.clockName;

    if (oldClockName !== clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed`
        + ` from ${oldClockName} to ${clockName}.`);
    }
  }

  setRandomName = () => {
    const min = 1;
    const max = 1000;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    this.setState({ clockName: num });
  }

  runTimer = () => {
    const id = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);

    this.setState({ intervalId: id });
  }

  clearTimer = () => {
    const { intervalId } = this.state;

    clearInterval(intervalId);
  }

  showTimer = () => {
    this.setState({ isClockVisible: true });
    this.runTimer();
  }

  hideTimer = () => {
    this.setState({ isClockVisible: false });
    this.clearTimer();
  }

  render() {
    const { date, isClockVisible } = this.state;
    // eslint-disable-next-line
    console.log(date ? `time is ${date}` : 'timer isn\'t set up yet');

    return (
      <>
        <div className="control">
          <button type="button" onClick={this.showTimer}>
            Show Clock
          </button>
          <button type="button" onClick={this.hideTimer}>
            Hide Clock
          </button>
          <button type="button" onClick={this.setRandomName}>
            Set random name
          </button>
        </div>
        <p className={isClockVisible ? ' time show' : 'time hide'}>
          {`Current time: ${date}`}
        </p>
      </>
    );
  }
}
