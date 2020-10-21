import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: (new Date()).toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <h1>
          {`Clock named ${this.props.name}`}
        </h1>
        <p>
          {this.props.isClockVisible ? `Current time:
          ${this.state.time}` : ''}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
  name: PropTypes.number.isRequired,
};

export default Clock;
