import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  timeInterval = setInterval(() => {
    const date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
    this.setState({ time: date });
  }, 1000);

  componentDidMount() {
    return this.timeInterval;
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    const { isVisible } = this.props;

    if (isVisible) {
      return (
        <span>
          {this.state.time.toLocaleTimeString()}
        </span>
      );
    }

    return <span>Empty</span>;
  }
}

Clock.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
