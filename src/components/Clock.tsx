import React from 'react';

type Props = {
  name: number
};

type State = {
  currTime: string,
  timerId: NodeJS.Timeout
};

class Clock extends React.Component<Props, State> {
  state = {
    currTime: 'Mounting...',
    timerId: setTimeout(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ currTime: date.toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactNode {
    const { currTime } = this.state;
    const { name } = this.props;

    return (
      <>
        <h2>{`Clock name: ${name}`}</h2>
        <p>{`Current time: ${currTime}`}</p>
      </>
    );
  }
}

export default Clock;
