import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`Previous name: ${prevProps.name}`);
      // eslint-disable-next-line
      console.log(`Current name: ${this.props.name}`);
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
        {this.state.date}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
