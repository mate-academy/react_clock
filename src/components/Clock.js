/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { date, name, prevName } = this.props;

    return (
      <>
        <strong>
          {date.toString()}
        </strong>
        <br />
        <>
          The Clock was renamed from
          {' '}
          {prevName}
          {' '}
          to
          {' '}
          {name}
        </>
      </>
    );
  }
}

Clock.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  prevName: PropTypes.number.isRequired,
};
