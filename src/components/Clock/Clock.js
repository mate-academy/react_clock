import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="App__clock">
        <h1 className="App__title">{`Clock ${clockName}`}</h1>
        <p className="App__clock-text">Current time:</p>
        <p className="App__clock-time">{time}</p>
      </div>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
