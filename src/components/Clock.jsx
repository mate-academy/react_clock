import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date();

      this.setState({ date: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
