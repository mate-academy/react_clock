import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`)
    }
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
  clockName: PropTypes.number.isRequired,
};
