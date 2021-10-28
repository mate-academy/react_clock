import React from 'react';

type State = {
  time: string
};

type Props = {
  changeStatus: () => void
};

class Clock extends React.Component<Props, State> {
  timerId?: number;

  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.props.changeStatus();
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    this.props.changeStatus();
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
