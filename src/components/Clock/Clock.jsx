/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

export class Clock extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  constructor() {
    super();

    this.state = {
      date: new Date(),
    };

    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      console.log(`The Clock was renamed from ${prevProps.name} `
      + `to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <div className="clock__info">
        {date.toLocaleTimeString()}
        {console.log(date.toLocaleTimeString())}
      </div>
    );
  }
}
