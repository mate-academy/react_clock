import React from 'react';

type Props = {
  name: string
};

type State = {
  time: string,
  timeId: NodeJS.Timer;
};

class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    timeId: setTimeout(() => { }, 0),
  };

  componentDidMount() {
    this.state.timeId = setInterval(() => {
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
    clearInterval(this.state.timeId);
  }

  render() {
    return (
      <>
        <p>{`${this.props.name}`}</p>
        <p>{`${this.state.time}`}</p>
      </>
    );
  }
}

export default Clock;
