import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  }

  timer = setInterval(() => {
    this.setState({ currentTime: new Date().toLocaleTimeString() });
    // eslint-disable-next-line
    console.log(this.state.currentTime);
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console,max-len
      console.log(`The Clock was renamed from ${prevProps.name}  to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <p>
        {'Current time: '}
        {currentTime}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
