/* eslint-disable no-console */
import React from 'react';

type State = {
  date: Date;
};

type Props = {
  name: number;
};

class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timer = setInterval(() => { }, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name: oldName }: Props) {
    if (oldName !== this.props.name) {
      console.log(`The Clock was renamed from ${oldName} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        Current time is:
        {' '}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
