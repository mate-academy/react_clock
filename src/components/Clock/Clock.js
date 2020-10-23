import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  tick = setInterval(
    () => {
      this.setState({
        time: (new Date()).toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000,
  );

  componentDidMount() {
    return this.tick;
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="clock">
        <h1>
          {`Clock #${name}`}
        </h1>
        <p>
          {time}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
