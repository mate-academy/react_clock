import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name }) {
    if (name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearTimeout(this.time);
  }

  render() {
    return (
      <span>{this.state.date.toLocaleTimeString()}</span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
