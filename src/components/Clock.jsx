import React from 'react';
import propTypes from 'prop-types';

import { currentDate } from '../functions/currentDate';

export class Clock extends React.Component {
  state = {
    date: currentDate(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const dateNow = currentDate();

      // eslint-disable-next-line no-console
      console.log(dateNow);

      this.setState({ date: dateNow });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <section>
        <h1>{`React clock №${name}`}</h1>
        <p>{`Current time: ${date}`}</p>
      </section>
    );
  }
}

Clock.propTypes = {
  name: propTypes.number,
};

Clock.defaultProps = {
  name: 1,
};
