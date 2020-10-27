import React from 'react';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());

    return (
      <div>
        <h2>
          Сейчас
          {' '}
          {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

export default Clock;
