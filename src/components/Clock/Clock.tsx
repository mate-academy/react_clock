import React from 'react';

type Props = {
  name: string;
};

type State = {
  timer: string;
  timerId: NodeJS.Timer;
};

export class Clock extends React.Component<Props, State> {
  state = {
    timer: new Date().toLocaleTimeString(),
    timerId: setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timer: new Date().toLocaleTimeString(),
      });
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
      <div className="App">
        <h1 className="clock__title" data-cy="time">{this.props.name}</h1>
        <p className="clock__timer">
          {`Current time: ${this.state.timer}`}
        </p>
      </div>
    );
  }
}
