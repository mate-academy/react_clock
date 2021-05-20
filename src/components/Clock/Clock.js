import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState({ date: new Date().toLocaleTimeString() });
        // eslint-disable-next-line
        console.log(this.state.date);
      }, 1000),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}.`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <span>
        {this.state.date}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
