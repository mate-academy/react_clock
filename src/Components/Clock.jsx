import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { date, name } = this.props;

    return (
      <>
        <h1>
          Now name clock:
          {' '}
          {name}
        </h1>
        Current time:
        {' '}
        { // eslint-disable-next-line no-console
          console.log(date.toLocaleTimeString('en-US', { hour12: false }))}
        {date.toLocaleTimeString('en-US', { hour12: false })}

      </>

    );
  }
}

Clock.propTypes = {
  date: PropTypes.objectOf(PropTypes.number),
  name: PropTypes.number.isRequired,
};

Clock.defaultProps = {
  date: {},
};
