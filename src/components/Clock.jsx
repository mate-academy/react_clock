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
    if (prevProps.name === undefined) {
      // eslint-disable-next-line
      console.log(`The Clock was named ${this.props.name}`);
    } else if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
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

    return (
      <>
        <span>
          {` ${time}`}
        </span>
        {this.props.name && <span>{` (named: ${this.props.name})`}</span>}
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
