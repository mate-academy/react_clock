import PropTypes from 'prop-types';

export const AppTypes = PropTypes.shape({
  isClockVisible: PropTypes.bool.isRequired,
  clockName: PropTypes.string.isRequired,
});

export const ClockTypes = PropTypes.shape({
  date: PropTypes.object,
  timer: PropTypes.func,
});
