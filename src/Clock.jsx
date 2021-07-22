import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
    // eslint-disable-next-line
    console.log(new Date().toLocaleTimeString());
  }

  render() {
    return (
      <div>
        <span className="clock">
          {this.state.time}
        </span>
      </div>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};

export default Clock;
