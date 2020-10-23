import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  timer = setInterval(
    () => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });

      // eslint-disable-next-line no-console
      console.log(this.state.date);
    },
    1000,
  );

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <>
        <h4 className="App__heading">
          {`Clock #${name}`}
        </h4>
        <p>
          Current time:
          {' '}
          {date}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
