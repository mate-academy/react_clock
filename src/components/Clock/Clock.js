import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
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
      date: new Date().toLocaleTimeString(),
    });

    // eslint-disable-next-line no-console
    console.log(this.state.date);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="clock">
        <h1>
          {`Clock #${name}`}
        </h1>
        <p>
          {date}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
