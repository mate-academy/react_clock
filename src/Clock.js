import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <div>
        {
          this.props.isClockVisible
          && (
            <p>
              Current time:
              {' '}
              {this.props.time}
            </p>
          )
        }
      </div>
    );
  }
}

Clock.propTypes = PropTypes.shape({
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isClockVisible: PropTypes.bool.isRequired,
}).isRequired;
