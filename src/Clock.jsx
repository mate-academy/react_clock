/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    clockName: '',
  }

  componentDidUpdate(PrevState) {
    if (PrevState.data.clockName !== this.props.data.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${PrevState.data.clockName}
        to ${this.props.data.clockName}`);
      this.setState({ clockName: this.props.data.clockName });
    }
  }

  render() {
    const { data } = this.props;

    return (
      <p>
        Current time:
        {' '}
        {data.date}
      </p>
    );
  }
}

Clock.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    clockName: PropTypes.isRequired,
  }).isRequired,
};

export default Clock;
