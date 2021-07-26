import React from 'react';

import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.tick();
        // eslint-disable-next-line no-console
        console.log(this.state.date.toLocaleTimeString());
      },
      1000,
    );
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;

    return (
      <span className="time">
        {date.toLocaleTimeString()}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
