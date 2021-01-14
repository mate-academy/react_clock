import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {}

  componentDidMount() {
    const intervalID = setInterval(() => {
      const date = new Date();
      // eslint-disable-next-line
      this.setState({currentDate: date.toLocaleTimeString()});
      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);

    this.setState({ setInterval: intervalID });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(`
      The Clock was renamed from ${prevProps.clockName}
      to ${this.props.clockName}
      `);
    }
  }

  componentWillUnmount() {
    if (this.props.show) {
      clearInterval(this.state.setInterval);
    }
  }

  render() {
    return (
      <span>
        {this.state.currentDate}
      </span>
    );
  }
}

export default Clock;

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
};
