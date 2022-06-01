import React from 'react';
import './Clock.scss';

type Props = {
  name: string,
};

type State = {
  date: string,
};

class Clock extends React.Component<Props, State> {
  state = {
    date: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate({ name }: Readonly<Props>) {
    if (this.props.name !== name) {
      // eslint-disable-next-line
    console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;

    return (
      <div className="clock">
        <p className="clock__info">Current time:</p>
        <strong data-cy="time" className="clock__time">{date}</strong>
      </div>
    );
  }
}

export default Clock;
