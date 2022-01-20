// import { time, timeStamp } from 'console';
import React from 'react';

type Props = {
  name: number,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timeout | null;

  componentDidMount() {
    this.timerId = this.startTimer();

    // eslint-disable-next-line no-console
    console.log(this.state.time);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  startTimer() {
    return setInterval(() => {
      const date: Date = new Date();

      this.setState({
        time: date.toLocaleTimeString(),
      });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="">
        {time}
        <button
          className="
            button
            ml-6
            mt-4
            is-black
            is-inverted"
          type="button"
          onClick={() => {
            if (this.timerId) {
              clearInterval(this.timerId);
              this.timerId = null;
            } else {
              this.timerId = this.startTimer();
            }
          }}
        >
          Stop
        </button>
      </div>
    );
  }
}
