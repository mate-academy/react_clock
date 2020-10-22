import PropTypes from 'prop-types';

export const ButtonShape = PropTypes.shape({
  handleClick: PropTypes.func.isRequired,
}).isRequired;
