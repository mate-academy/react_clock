import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.setState({
      time: setInterval(() => {
        this.setState({ date: new Date() });
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.newName !== this.props.newName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from`
        + ` ${prevProps.newName} to ${this.props.newName}`);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.time);
  }

  render() {
    return (
      <span>{this.state.date.toLocaleTimeString()}</span>
    );
  }
}

Clock.propTypes = {
  newName: PropTypes.number.isRequired,
};
