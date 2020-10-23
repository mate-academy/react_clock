import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { name, isVisible } = this.props;

    return (
      <div className="Clock">
        <h3 className="Clock__id">{`Clock id: ${name}`}</h3>

        <p>{isVisible && 'Current time:'}</p>
        <p className="Clock__time">{isVisible && this.state.time}</p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
