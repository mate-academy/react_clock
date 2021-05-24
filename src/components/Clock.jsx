import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick()
      , 1000,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const newName = this.props.name;
    const oldName = prevProps.name;

    if (prevProps.name.localeCompare(this.props.name) !== 0) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: new Date().toLocaleTimeString() });
    // eslint-disable-next-line no-console
    console.log(this.state.time);
  }

  render() {
    return <span>{this.state.time}</span>;
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
