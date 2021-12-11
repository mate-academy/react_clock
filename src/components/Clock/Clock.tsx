import React from 'react';

interface Props {
  time: string,
  id?: number
}

// eslint-disable-next-line
export class Clock extends React.Component<Props> {

  componentWillUnmount() {
    // eslint-disable-next-line
    console.log('clock\'ve been stoped by componentWillUnmount()');
    clearInterval(this.props.id);
  }

  render() {
    const { time } = this.props;

    return (
      <p>
        Current time:
        {' '}
        {time}
      </p>
    );
  }
}
