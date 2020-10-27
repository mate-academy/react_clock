import React from 'react';
import './Clock.scss';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(this.state.date);

      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App__clock clock">
        <h2 className="clock__name">
          Name:
          {' '}
          {this.props.name}
        </h2>

        <p className="clock__time">
          Time is now:
          {' '}
          {this.state.date}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
