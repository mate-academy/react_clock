// import { type } from 'os';
import React from 'react';

import './App.scss';

type Props = {
  clockId: number,
};

type State = {
  clockTime: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    clockTime: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ clockTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.clockTime);
    }, 1000);
  }

  componentDidUpdate(oldName: Props) {
    const newName = this.props;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName.clockId} to ${newName.clockId}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { clockId } = this.props;
    const { clockTime } = this.state;

    return (
      <div className="Clock__data">
        <h2 className="Clock__data-name">{`I'm Clock, and my name is ${clockId}`}</h2>
        <div className="Clock__data-time">{`${clockTime}`}</div>
      </div>
    );
  }
}
