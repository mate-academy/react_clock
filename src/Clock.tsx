import React from 'react';
import './Clock.scss';

type Props = {
  name: string | number;
};

type State = {
  time: null | string;
  timer: null | number | NodeJS.Timer;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: null,
    timer: null,
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({
        time: date.toLocaleTimeString(),
        timer: timerId,
      });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.state.timer !== null) {
      clearInterval(this.state.timer);
    }
  }

  render() {
    return (
      <>
        <h1 className="clock__name">{this.props.name}</h1>
        <p data-cy="time" className="clock">
          {this.state.time}
        </p>
      </>
    );
  }
}
