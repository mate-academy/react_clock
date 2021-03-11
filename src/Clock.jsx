import React from 'react';

export class Clock extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.clockName !== this.props.clockName) {
      console.log(
        `The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}.`
      );
    }
  }

  render() {
    const { date } = this.props;

    // eslint-disable-next-line;
    console.log(date.toLocaleTimeString());

    return(
      <p>{date.toLocaleTimeString()}</p>
    )
  }
};
