import React from 'react';
import './Clock.scss';

type Props = {
  name: string,
};

type State = {
  date: Date;
  timerId: NodeJS.Timer
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <span className="clock">
        {this.state.date.toLocaleTimeString()}
        {' - '}
        {this.props.name}
      </span>
    );
  }
}
