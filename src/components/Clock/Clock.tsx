import React from 'react';
import './Clock.scss';

type NameType = {
  name: number,
};

class Clock extends React.Component<NameType> {
  state = {
    date: new Date(),
  };

  // I was forced to declare timer here because of mistake appearing during declaring in componentDidMount
  timerId: NodeJS.Timer = setInterval(() => {
    this.tick();
  }, 1000);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);

    // eslint-disable-next-line
    console.log(this.timerId);
  }

  componentDidUpdate(prevProps: NameType) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;

    return (
      <>
        <p className="clockText">
          Current time:
          {' '}
          {date.toLocaleTimeString()}
        </p>
      </>
    );
  }
}

export default Clock;
