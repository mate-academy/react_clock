import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    dateOut: new Date(),
  };

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.setState({ dateOut: new Date() });
      // eslint-disable-next-line
       console.log(this.state.dateOut.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    return (
      <>
        {this.state.dateOut.toLocaleTimeString()}
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number,
};

Clock.defaultProps = {
  name: 3.14,
};

export default Clock;
