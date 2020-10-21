import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    name: this.props.name,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  render() {
    const { status, name } = this.props;

    this.state.name = name;

    if (status) {
      return (
        <div>
          <p>
            Name:
            {' '}
            {this.state.name}
          </p>
          <p>
            {`Current time: ${this.state.date}`}
          </p>
        </div>
      );
    }

    return (
      <p>No clocks! </p>
    );
  }
}

Clock.propTypes = {
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
