import React from 'react';
import './App.scss';

type State = {
  date: Date,
};

class Clock extends React.Component {
  state: State = {
    date: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      this.state.date.toLocaleTimeString()
    );
  }
}

export default Clock;
