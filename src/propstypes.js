import PropTypes from 'prop-types';

export const buttonControlProps = {
  changeClockVisability: PropTypes.func,
  getRandomClockName: PropTypes.func,
};

export const clockProps = {
  clockName: PropTypes.number.isRequired,
};
