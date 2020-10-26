import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => {
        this.setState({
          date: new Date().toLocaleTimeString(),
        });

        // eslint-disable-next-line no-console
        console.log(this.state.date);
      },
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <>
        <h4 className="app__heading">
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
