import React from 'react';
import './Clock.scss';

type Props = {
  name: string;
};

type State = {
  time: string;
  timerId: NodeJS.Timer;
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: setTimeout(() => {}, 0),
    name: this.props.name,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        const date: Date = new Date();

        // eslint-disable-next-line no-console
        console.log(date.toLocaleTimeString());
        this.setState({ time: new Date().toLocaleTimeString() });
      }, 1000),
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { time, name } = this.state;

    return (
      <>
        <p className="name">
          Clock name:
          {name}
        </p>
        <p className="clock">
          current time:
          {' '}
          {time}
        </p>
      </>
    );
  }
}
