/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

type Prop = {
  randomName: number,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Prop, State> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timer = setInterval(() => {});

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prev: Prop) {
    if (this.props.randomName !== prev.randomName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prev.randomName} to ${this.props.randomName}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}
