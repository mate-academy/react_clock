import React from 'react';

type Props = {
  name: string,
};

type State = {
  time: string;
};

function getTime() {
  return (new Date()).toLocaleTimeString();
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: getTime(),
  };

  clockTimer = 0;

  componentDidMount() {
    this.clockTimer = window.setInterval(() => {
      this.setState({ time: getTime() });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render(): React.ReactNode {
    return (
      <div className="clock">
        <strong>{this.props.name}</strong>
        {' time is '}
        {this.state.time}
        {` time is ${this.state.time}`}
      </div>
    );
  }
}
