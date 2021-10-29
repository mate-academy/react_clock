import React from 'react';

type State = {
  time: string
};

type Props = {
  updateStatus: () => void
};

class Clock extends React.Component<Props, State> {
  timerId?: number;

  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.props.updateStatus();
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    this.props.updateStatus();
  }

  render() {
    return (
      <div>
        {`Clock ${this.state.time}`}
      </div>
    );
  }
}

export default Clock;
