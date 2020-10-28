import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <>
        <h2>{`Name: #${name}`}</h2>
        <p>
          Current time:
          {' '}
          {date.toLocaleTimeString()}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
