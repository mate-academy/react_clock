import React from 'react';

type State = {
  time: string;
};

type Props = {

};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: 'START',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <div className=" ">{ time }</div>
    );
  }
}
