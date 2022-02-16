import React from 'react';

type Props = {
  name: string
};

type State = {
  currentTime: string,
  timerId: NodeJS.Timer;
};

class Clock extends React.Component<Props, State> {
  state = {
    currentTime: 'load...',
    timerId: setTimeout(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ currentTime: date.toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
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
        <p>{`Clock name: ${this.props.name}`}</p>
        <p>{ this.state.currentTime }</p>
      </>
    );
  }
}

export default Clock;
