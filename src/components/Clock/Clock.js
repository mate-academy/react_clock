import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const { date } = this.state;

      this.setState(prevState => ({ date: new Date() }));
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="clock">
        <h1 className="clock__name">{`Clock ${name}`}</h1>
        <p className="clock__time">
          {`Current time: ${date.toLocaleTimeString()}`}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number,
};

Clock.defaultProps = {
  name: 0,
};
