import React from 'react';
import PropTypes from 'prop-types';

import './Clock.css';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`The clock name ${prevProps.clockName} was changed to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p className="App__clock">
        {this.state.date}
      </p>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
