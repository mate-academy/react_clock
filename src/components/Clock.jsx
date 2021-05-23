import React from 'react';
import propTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: (new Date()).toLocaleTimeString(),
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ time: (new Date()).toLocaleTimeString() });
        // eslint-disable-next-line
        console.log(this.state.time);
      }, 1000),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.interval);
  }

  render() {
    return (
      <span>{this.state.time}</span>
    );
  }
}

Clock.propTypes = {
  name: propTypes.string.isRequired,
};
