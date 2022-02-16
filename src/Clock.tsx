import React from 'react';

type Props = {
  name: string
};

type State = {
  time: string,
  timerId: NodeJS.Timer;
};

class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: setTimeout(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <>
        <p>{`${this.props.name}`}</p>
        <p>{ this.state.time }</p>
      </>
    );
  }
}

export default Clock;
