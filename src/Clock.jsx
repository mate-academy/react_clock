import React from 'react';

export class Clock extends React.Component {
  render() {
    const { date } = this.props;

    // eslint-disable-next-line;
    console.log(date.toLocaleTimeString());

    return(
      <p>{date.toLocaleTimeString()}</p>
    )
  }
};
