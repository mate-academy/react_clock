import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.step(),
      1000,
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  step() {
    this.setState({ time: new Date() });
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="card-content clock">
        <p>{`Current time: ${time.toLocaleTimeString()}`}</p>
        <span>{`Current name: ${name}`}</span>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
