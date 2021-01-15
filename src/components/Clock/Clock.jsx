/* eslint-disable no-console */
import React from 'react';
import './Clock.scss';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  timer = setInterval(() => {
    this.setState({
      date: new Date(),
    });
  }, 1000)

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      console.log(
        `The Clock was renamed from oldName to newName = ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        <div className="clock">
          {date.toLocaleTimeString()}
          {console.log(date.toLocaleTimeString())}
        </div>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number,
};

Clock.defaultProps = {
  name: 1,
};

export default Clock;
