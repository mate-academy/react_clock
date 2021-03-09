import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.update();

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(
        'The Clock was renamed from ',
        prevProps.name,
        ' to ',
        this.props.name,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  update() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <span>{this.state.date.toLocaleTimeString()}</span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
