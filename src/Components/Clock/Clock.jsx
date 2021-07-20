import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.props.isVisible) {
        this.setState({ date: new Date().toLocaleTimeString() });
        // eslint-disable-next-line
        console.log(this.state.date);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="clock">
        <h1 className="clock__title">React Clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
