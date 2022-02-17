import React from 'react';
import './Clock.scss';

type Props = {
  name: string;
};

type State = {
  time: string;
  timerId: NodeJS.Timer;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
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
      <>
        <div>{this.state.time}</div>
        <div
          className="name"
          style={{ color: `${this.props.name}` }}
        >
          {this.props.name}
        </div>
      </>
    );
  }
}
