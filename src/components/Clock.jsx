import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (prevProps.name === undefined) {
      // eslint-disable-next-line
      console.log(`The Clock was named ${name}`);
    } else if (prevProps.name !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }

    // eslint-disable-next-line
    console.log('Current time: ', this.state.time);
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    console.log('unmount');
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <>
        <span>
          {` ${time}`}
        </span>
        {name && <span>{` (named: ${name})`}</span>}
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
