import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
    this.consoleMessageID = setInterval(() => 
    // eslint-disable-next-line
    console.log(this.state.date),
    1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.name} `
        + `to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.consoleMessageID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
