import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
      this.setState({
        date,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clockName !== this.props.clockName) {
      /* eslint-disable-next-line no-console */
      console.log(
        `The Clock was renamed from
        ${prevProps.clockName} to ${this.props.clockName}.`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <p>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
