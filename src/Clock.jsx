import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line max-len
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  printIntoConsole() {
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    const { date } = this.state;
    const { isClockVisible } = this.props;

    if (isClockVisible) {
      this.printIntoConsole();
    }

    return (
      <p>
        {isClockVisible
         && `Current time: ${date.toLocaleTimeString()}`}
      </p>
    );
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
  name: PropTypes.number.isRequired,
};
