import React from 'react';
import propTypes from 'prop-types';

import { getCurrentDate } from '../functions/currentDate';

export class Clock extends React.Component {
  state = {
    date: getCurrentDate(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const dateNow = getCurrentDate();

      // eslint-disable-next-line no-console
      console.log(dateNow);

      this.setState({ date: dateNow });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { number } = this.props;
    const { date } = this.state;

    return (
      <section>
        <h1>{`React clock №${number}`}</h1>
        <p>{`Current time: ${date}`}</p>
      </section>
    );
  }
}

Clock.propTypes = {
  number: propTypes.number.isRequired,
};
