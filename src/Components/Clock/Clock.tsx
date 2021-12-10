import React from 'react';

import './Clock.scss';

type Props = {
  name: number;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString())
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = prevProps;

    if (name !== this.props.name) {
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
      <div className="clock__time">
        {`Current time: ${date.toLocaleTimeString()}`}
      </div>
    );
  }
}
