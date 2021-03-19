import React from 'react';

import PropTypes from 'prop-types';

export class Clock extends React.Component {
  timer = null;

  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <span>
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
