import PropTypes from 'prop-types';

export const buttonPropTypes = {
  onClick: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export const clockPropTypes = {
  name: PropTypes.number.isRequired,
};
