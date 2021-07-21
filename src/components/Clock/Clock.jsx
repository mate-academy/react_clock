import React from 'react';
import { Card } from 'react-bootstrap';
import { ClockProps } from '../../PropsTypes';

export default function Clock({ time }) {
  // eslint-disable-next-line
  console.log(time);

  return (
    <Card.Body>
      <Card.Title>React clock</Card.Title>
      <Card.Text>
        Current time:
        {' '}
        {time}
        {' '}
      </Card.Text>
    </Card.Body>
  );
}

Clock.propTypes = ClockProps;
