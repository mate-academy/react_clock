import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  props = {
    name: 'Clock',
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${
          prevProps.name
        } to ${
          this.props.name
        }`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.time}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
