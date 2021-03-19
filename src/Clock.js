import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <h2>
        Сейчас
        {' '}
        {this.state.time.toLocaleTimeString()}
      </h2>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
