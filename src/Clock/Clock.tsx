import React from 'react';

interface Props {
  name: number,
}

interface State {
  date: Date,
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timer = setInterval(() => {
    const { date } = this.state;

    this.setState({
      date: new Date(),
    });

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      this.state.date.toLocaleTimeString()
    );
  }
}
