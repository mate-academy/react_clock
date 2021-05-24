import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
    this.setState({
      time: setInterval(() => {
        this.setState({ date: new Date() });
      }, 1000),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.time);
  }

  render() {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
