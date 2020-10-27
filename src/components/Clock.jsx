import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.clock = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      this.setState({ time: date });
      // eslint-disable-next-line no-console
      console.log(date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="clock">
        <p className="clock__name">
          {`Clock Name ${name}`}
        </p>

        <p className="clock__time">
          {`Current time: ${time}`}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
