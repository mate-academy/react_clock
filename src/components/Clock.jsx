import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from `
       + `${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (

      <span>
        Current time:
        {' '}
        {date.toLocaleTimeString()}
        {' '}
        {name}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
