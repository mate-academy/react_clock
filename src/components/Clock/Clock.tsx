import React from 'react';

type Props = {
  name: string
};

type State = {
  currentTime: string,
  // timerId: ??
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

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactNode {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <>
        <p>{`Clock name: ${name}`}</p>
        <p>{ currentTime }</p>
      </>
    );
  }
}

export default Clock;
