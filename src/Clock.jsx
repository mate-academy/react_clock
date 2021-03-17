import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from oldName to newName ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <p>
        Current time:
        {' '}
        {date.toLocaleTimeString()}
      </p>
    );
  }
}

export default Clock;

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
