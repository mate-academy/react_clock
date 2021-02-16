import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      const newDate = new Date();

      this.setState({ date: newDate });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.name === prevProps.name) {
      return;
    }

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed
    from ${prevProps.name} to ${this.props.name}`);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { date } = this.state;

    // eslint-disable-next-line no-console
    console.log(date.toLocaleTimeString());

    return (
      date.toLocaleTimeString()
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number,
};

Clock.defaultProps = {
  name: 0,
};
