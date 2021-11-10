import React from 'react';

type Props = {};
interface State {
  currentDate: Date;
}

class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timer | undefined;

  state: State = {
    currentDate: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentDate: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return <div>{this.state.currentDate.toLocaleTimeString()}</div>;
  }
}

export default Clock;
