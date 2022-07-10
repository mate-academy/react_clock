/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  dateTimer = 0;

  componentDidMount() {
    this.dateTimer = window.setInterval(() => {
      const date = new Date();

      console.log(date.toLocaleTimeString());

      this.setState({ date });
    }, 1000);
  }

  componentDidUpdate(prevState: Props) {
    if (prevState.name !== this.props.name) {
      console.log(`Renamed from ${prevState.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.dateTimer);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;
    const timeString = date.toLocaleTimeString();

    return (
      <div className="clock">
        <p className="clock__name">
          {name}
        </p>

        <p className="clock__time">
          {timeString}
        </p>
      </div>
    );
  }
}
