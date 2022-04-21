import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: string = new Date().toLocaleTimeString();

      this.setState({
        time: date,
      });
      // eslint-disable-next-line
      console.log(date);
    }, 1000);
  }

  componentDidUpdate({ clockName }: Readonly<Props>) {
    if (clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <>
        <h3>
          {`Clock name: ${this.props.clockName}`}
        </h3>
        <p data-cy="time">
          {`Current time: ${this.state.time}`}
        </p>
      </>
    );
  }
}
