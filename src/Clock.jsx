import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from
        ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time, isClockVisible } = this.state;
    const { name } = this.props;

    return (
      <div>
        Current time:
        {' '}
        <span className="currentTime" hidden={isClockVisible}>
          {time.toLocaleTimeString()}
        </span>
        <span className="random">
          Random name is:
          <span className="random-name">{name}</span>
        </span>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
