import React from 'react';

type Props = {
  date: Date;
};

type State = {
  date: Date;
};

export default class Clock extends React.Component<Props, State> {
  state = {
    date: this.props.date,
  };

  timer = setInterval(() => {
    const { date } = this.state;
    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
    this.setState({ date: new Date() });
  }, 1000);

  render() {
    const { date } = this.state;

    return (
      <p>
        Current time:
        {' '}
        {date.toLocaleTimeString()}
      </p>
    );
  }
}
