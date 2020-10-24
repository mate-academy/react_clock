import React from 'react';
import propTypes from 'prop-types';

import { currentDate } from '../../helpers/currentDate';

export class Clock extends React.Component {
  state = {
    date: currentDate(),
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    const curDate = currentDate();

    // eslint-disable-next-line no-console
    console.log(curDate);

    this.setState({ date: curDate });
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <section>
        <h1 className="card-title">{`React clock ${name}`}</h1>
        <p className="card-text mb-3">{`Current time: ${date}`}</p>
      </section>
    );
  }
}

Clock.propTypes = {
  name: propTypes.number.isRequired,
};
