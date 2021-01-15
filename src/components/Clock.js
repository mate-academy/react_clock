import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from '${prevProps.name}'`
        + ` to '${this.props.name}'`,
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
          {/* eslint-disable-next-line no-console */}
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
  name: 0,
};

export default Clock;
