import PropTypes from 'prop-types';

export const clockProps = {
  hide: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  clockName: PropTypes.number.isRequired,
};
