import React from 'react';

type State = {
  time: string;
};

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    // eslint-disable-next-line
    console.log(`Start clock: ${this.props.clockName}`);

    this.timerId = setInterval(() => {
      const time = new Date().toLocaleTimeString();

      this.setState({
        time,
      });

      // eslint-disable-next-line
      console.log(time);
    }, 1000);

    // eslint-disable-next-line
    console.log(`${this.state.time}`);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`Name of clock was changed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    console.log(`Stop clock: ${this.props.clockName}`);

    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <p data-cy="time" className="clock">
        {this.state.time}
      </p>
    );
  }
}
