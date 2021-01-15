import React from 'react';
import PropType from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  interval = setInterval(() => {
    this.setState({ date: new Date() });

    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.interval;
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    const { date } = this.state;

    return (
      <p className="clock">
        {`Current time: ${date.toLocaleTimeString()}`}
      </p>
    );
  }
}
Clock.propTypes = {
  name: PropType.number.isRequired,
};
