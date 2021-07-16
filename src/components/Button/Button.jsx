import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  handleClickOn = () => {
    this.props.parentClickOn();
  }

   handleClickOff = () => {
     this.props.parentClickOff();
   }

  getRandomName = () => {
    this.props.parentGetRandomName();
  }

  render() {
    return (
      <>
        <button
          onClick={this.handleClickOn}
          className="post-button"
          type="button"
        >
          Show Clock
        </button>
        <button
          onClick={this.handleClickOff}
          className="post-button"
          type="button"
        >
          Hide Clock
        </button>
        <button
          onClick={this.getRandomName}
          className="post-button"
          type="button"
        >
          Set random name
        </button>
      </>
    );
  }
}

Button.propTypes = {
  parentClickOn: PropTypes.func.isRequired,
  parentClickOff: PropTypes.func.isRequired,
  parentGetRandomName: PropTypes.func.isRequired,
};
