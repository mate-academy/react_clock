import React from 'react';

type Props = {
  clockName: number,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  setTime = setInterval(() => {
    this.setState({ date: new Date() });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString);
  }, 1000);

  componentDidMount() {
    return this.setTime;
  }

  componentWillUnmount() {
    clearInterval(this.setTime);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        Current time:
        {' '}
        {date.toLocaleTimeString()}
      </>
    );
  }
}
