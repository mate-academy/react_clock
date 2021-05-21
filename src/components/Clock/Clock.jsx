import React from 'react';
import PropTypes from 'prop-types';
export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.setState({
      time: setInterval(() => {
        this.setState({ date: new Date() });
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000),
    });
  }

  componentDidUpdate(prevProps) {
    console.log(
      prevProps.name === this.props.name
        ? this.state.time
        : `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.state.time);
  }

  render() {
    const { date } = this.state;

    return (
      <p>
        Current time:
        {' '}
        {date.toLocaleTimeString()}
      </p>
    );
  }
}

Clock.propTypes = {
  newName: PropTypes.number.isRequired,
};
