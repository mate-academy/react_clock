import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  timer = setInterval(() => {
    this.setState({
      date: new Date(),
    });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString())
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <span>
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
