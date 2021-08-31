import React from 'react';

type Props = {
  name: number;
};
type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = setInterval(
    () => this.tick(),
    1000,
  );

  componentDidMount() {
    return this.timerId;
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());

    return (
      <>
        {this.state.date.toLocaleTimeString().slice(0, -2)}
      </>
    );
  }
}
