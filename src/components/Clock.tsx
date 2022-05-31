import React from 'react';

interface Props {
  clockName: number;
}

export class Clock extends React.Component<Props> {
  state = {
    time: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps : Props) {
    if (prevProps.clockName !== this.props.clockName) {
      console.log(`name changed from ${prevProps.clockName} to ${this.props.clockName}`);
    } else {
      console.log(this.state.time);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <p
        id="clock"
        style={{ display: 'block' }}
      >
        Current time:
        {' '}
        {`${this.state.time}`}
      </p>
    );
  }
}
