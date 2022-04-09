import React from 'react';

type State = {
  time: Date;
  timerId: NodeJS.Timeout,
};

type Props = {

};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
    timerId: setInterval(() => {}, 1000),
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ time: new Date() });
        // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString());
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <>
        {this.state.time.toLocaleTimeString()}
      </>
    );
  }
}
