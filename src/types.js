import PropTypes from 'prop-types';

export const AppTypes = PropTypes.shape({
  isClockVisible: PropTypes.bool.isRequired,
  clockName: PropTypes.string.isRequired,
});
