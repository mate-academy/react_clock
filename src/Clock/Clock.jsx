import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

export class Clock extends React.Component {
  state = {
    currentTime: new Date(),
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.currentTime.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <p className="App__text">
        Current time:
        {' '}
        {currentTime.toLocaleTimeString()}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
