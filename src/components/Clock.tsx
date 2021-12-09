/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: number,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timer;

  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    let { name }: Props = this.props;

    this.timerId = setInterval(() => {
      const newName = this.props.name;

      if (name !== newName) {
        console.log(`The Clock was renamed from ${name} to ${newName}`);
        name = newName;
      }

      console.log(this.state.time);
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  // I know about this function
  //
  // componentDidUpdate({ name } : Props) {
  //   if (name !== this.props.name) {
  //     console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
  //   }
  // }

  componentWillUnmount() {
    console.log(`the time was hidden at ${this.state.time}`);
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <>
        {this.state.time}
      </>
    );
  }
}
