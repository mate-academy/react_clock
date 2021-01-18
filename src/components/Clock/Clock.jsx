import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (

      <div className="clock">
        <h1>React clock</h1>
        <p className="clock__name">
          The clock name is:
          {` ${name}`}
        </p>
        <p className="clock__current">
          Current time:
          {` ${time}`}
        </p>

      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
