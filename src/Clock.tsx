import React from 'react';
import './Clock.scss';

type Props = {
  name: string | number;
};

type State = {
  time: null | string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: null,
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({
        time: date.toLocaleTimeString(),
      });

      if (this.state.time) {
        // eslint-disable-next-line no-console
        console.log(this.state.time);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
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
