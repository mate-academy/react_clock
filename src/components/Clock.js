import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  static propTypes = {
    name: PropTypes.number.isRequired,
  };

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
      // eslint-disable-next-line
      console.log(`The Clock was renamed from
        ${prevProps.name} to ${this.props.name}`);
    }
  }

  render(name) {
    const { date } = this.state;

    return (
      <>
        <span>
          {date.toLocaleTimeString()}
        </span>
        <span>
          {' '}
          {name}
        </span>
      </>
    );
  }
}

export default Clock;
