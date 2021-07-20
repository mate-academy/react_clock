import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export class Button extends React.Component {
  show = () => {
    this.props.clockShow();
  }

  hide = () => {
    this.props.clockHide();
  }

  getRandomName = () => {
    this.props.clockGetRandomName();
  }

  render() {
    return (
      <>
        <button
          onClick={this.show}
          className="button"
          type="button"
        >
          Show Clock
        </button>
        <button
          onClick={this.hide}
          className="button"
          type="button"
        >
          Hide Clock
        </button>
        <button
          onClick={this.getRandomName}
          className="button"
          type="button"
        >
          Say my name
        </button>
      </>
    );
  }
}

Button.propTypes = {
  clockShow: PropTypes.func.isRequired,
  clockHide: PropTypes.func.isRequired,
  clockGetRandomName: PropTypes.func.isRequired,
};
