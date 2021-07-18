import React from 'react';

class Button extends React.Component {
  state = {
    isClockVisible: this.props.isClockVisible,
  }

  render() {
    console.log(this.props.isClockVisible);

    return (
      <div>a</div>
    );
  }
};

export default Button;
