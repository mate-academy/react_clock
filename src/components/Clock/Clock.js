import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  timer = setInterval(() => {
    this.setState({
      date: new Date(),
    });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console,max-len
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // eslint-disable-next-line no-console,max-len
    console.log(this.state.date.toLocaleTimeString());

    const { date } = this.state;

    return (
      <>
        {date.toLocaleTimeString()}
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
