import React from 'react';

type State = {
  date: Date,
};

type Props = {
  name: number,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(
      this.tick,
      1000,
    );
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  render() {
    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());

    return (
      <div className="clock-container">
        <h2 className="clockName">
          Clock Number
          {' '}
          {Number(this.props.name.toFixed(1)) * 10}
        </h2>
        <p className="clock">
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
