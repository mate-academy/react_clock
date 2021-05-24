import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = setInterval(() => this.setState(
      { time: new Date().toLocaleTimeString() },
    ), 1000);
  }

  componentDidUpdate(prevProps) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    // eslint-disable-next-line no-console
    console.log(this.state.time);

    if (oldName !== newName) {
    // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${oldName} to ${newName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        {this.state.time}
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
