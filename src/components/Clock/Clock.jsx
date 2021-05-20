import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());

    this.setState({
      interval: setInterval(() => {
        this.setState({ date: new Date() });
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000),
    });
  }

  componentDidUpdate(prevProps) {
    const { name } = prevProps;

    if (this.props.name !== name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.interval);
  }

  render() {
    const { date } = this.state;

    return (
      <span className="clock">
        {date.toLocaleTimeString()}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
