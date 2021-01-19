import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {};

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);

    this.setState({ interval });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div className="clock">
        Current time:
        {' '}
        {this.state.time}
      </div>
    );
  }
}

Clock.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;
