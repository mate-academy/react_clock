import React from 'react';

import './Clock.scss';

type Props = {
  name: string,
};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timer;

  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevName: Props) {
    if (prevName !== this.props) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName.name} to ${this.props.name}`);
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
      <div className="Clock">
        <p>{'Current time: '}</p>
        <span
          className="Clock__time"
          data-cy="time"
        >
          {date}
        </span>
      </div>
    );
  }
}
