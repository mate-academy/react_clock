import React from 'react';
import propTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      const oldName = prevProps.name;
      const newName = this.props.name;

      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      `${this.state.date}`
    );
  }
}

Clock.propTypes = {
  name: propTypes.string.isRequired,
};
