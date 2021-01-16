import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  timerId = 0;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        <span>{date.toLocaleTimeString()}</span>
        {' '}
        <br />
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
