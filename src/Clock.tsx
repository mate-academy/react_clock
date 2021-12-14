/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type Props = {
  value: Date,
  name: number
};

export default class Clock extends React.Component<Props> {
  render() {
    return this.props.value && (
      <>
        <h1>
          clock
          {' '}
          {this.props.name}
        </h1>
        <p>
          Current time:
          {' '}
          {this.props.value.toLocaleTimeString()}
          {console.log(this.props.value.toLocaleTimeString())}
        </p>
      </>
    );
  }
}
