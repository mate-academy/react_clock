import PropTypes from 'prop-types';
import React from 'react';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from oldName to newName ${this.state.prevName} to ${this.state.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p>
        { `React clock ${this.state.date.toLocaleTimeString()}` }
      </p>
    );
  }
}

export default Clock;

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
