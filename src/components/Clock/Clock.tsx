import React from 'react';
import Clocks from '../../api/ClockNames.json';

import './Clock.scss';

type Props = {
  name: number;
};

type State = {
  time: Date;
  timerId: NodeJS.Timer;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({ time: new Date() });

      // eslint-disable-next-line no-console
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = prevProps;
    const oldName = Clocks[name].clockFunName;
    const newName = Clocks[this.props.name].clockFunName;

    if (oldName !== newName) {
    // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <span className="timer clock__info">
        {this.state.time.toLocaleTimeString()}
      </span>
    );
  }
}
