import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
      // eslint-disable-next-line no-console
      console.log(
        this.state.date.toLocaleTimeString(),
      );
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <p className="clock__name">
          {`Name: ${this.props.name}`}
        </p>

        <p className="clock__date">
          {`Time: ${this.state.date.toLocaleTimeString()}`}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
