import React from 'react';
import './Clock.scss';

type Props = {
  name: string,
};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const time = new Date().toLocaleTimeString();

      this.setState({ date: time });

      // eslint-disable-next-line
      console.log(time);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <span className="clock">
        {`${this.state.date} - ${this.props.name}`}
      </span>
    );
  }
}
