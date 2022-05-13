import React from 'react';
import { StateType } from '../types/StateType';

type Props = {
  name: string
};

export class Clock extends React.Component<Props, StateType> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString()});
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <h1 data-cy="time">{this.state.time}</h1>
    );
  }
}
