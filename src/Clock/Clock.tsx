import React from 'react';
import './Clock.scss';

type Props = {
  name: string,
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => (
      this.tick()
    ), 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState({ date: new Date() });

    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    const { name } = this.props;

    return (
      <div className="clock">
        <h2 className="clock__title">
          {name}
          {' clock'}
        </h2>
        <div className="clock__numbers">
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}
