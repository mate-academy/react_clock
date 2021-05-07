
import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    isClockVisible: this.props.isClockVisible,
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isClockVisible: this.props.isClockVisible, date: new Date()
      });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name}
      to ${this.props.name}`);
    }
  }

  render() {
    if (this.props.isClockVisible) {
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());

      return (
        <div>{this.state.date.toLocaleTimeString()}</div>
      );
    }

    return <div />;
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
  date: PropTypes.object.isRequired,
  name: PropTypes.number.isRequired,
};
