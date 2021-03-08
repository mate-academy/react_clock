import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({
        date: new Date(),
      }),
      1000,
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed `
        + `from ${prevProps.name} to ${this.props.name}.`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    // eslint-disable-next-line no-console
    console.log(date.toLocaleTimeString());

    return (
      <p>
        {`Current time: ${date.toLocaleTimeString()}`}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
