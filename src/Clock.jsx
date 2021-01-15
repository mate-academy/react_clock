import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  timerId = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name: oldName }) {
    const { name } = this.props;

    if (oldName !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <p>
        {'Current time: '}
        {time.toLocaleTimeString()}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
