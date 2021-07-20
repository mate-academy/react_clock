import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: '00:00:00',
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h2 className="text-center">
          Current time:
          {' '}
          {this.state.time}
        </h2>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number,
};

Clock.defaultProps = {
  name: 'Clock name',
};
