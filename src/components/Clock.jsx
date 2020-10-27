import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  static propTypes = {
    name: PropTypes.number.isRequired,
  };

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());

    return (
      <>
        <p>
          My name is:
          <strong>{name}</strong>
        </p>
        <h1>{date.toLocaleTimeString()}</h1>
      </>
    );
  }
}
