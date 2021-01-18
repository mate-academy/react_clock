import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  static propTypes = {
    name: PropTypes.number.isRequired,
  };

  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(
        { time: new Date().toLocaleTimeString() },
      );
      if (this.props.isClockVisible) {
        // eslint-disable-next-line
        console.log(this.state.time);
      }
    }, 1000);
  }

  componentDidUpdate(prev) {
    if (prev.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prev.name} to ${this.props.name}`,
      );
    }
  }

  render() {
    return (
      <div className="App">

        {this.props.isClockVisible && (
          <p>
            Current time:
            {' '}
            {this.state.time}
          </p>
        )}

      </div>
    );
  }
}

Clock.propTypes = PropTypes.shape(
  {
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isClockVisible: PropTypes.bool.isRequired,
  },
).isRequired;
