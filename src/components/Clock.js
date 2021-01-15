import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  timer = setInterval(() => {
    this.setState({
      date: new Date(),
    });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      /* eslint-disable-next-line no-console */
      console.log('The Clock was renamed from oldName to newName');
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p>
        Current time:&nbsp;
        {
          // eslint-disable-next-line
          console.log(this.state.date.toLocaleTimeString())
        }
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}
Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
