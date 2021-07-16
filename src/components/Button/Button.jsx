import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {

  render() {
    return (
      <>
        <button
          onClick={this.props.parentClickOn}
          className="post-button"
          type="button"
        >
          Show Clock
        </button>
        <button
          onClick={this.props.parentClickOff}
          className="post-button"
          type="button"
        >
          Hide Clock
        </button>
        <button
          onClick={this.props.parentGetRandomName}
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
