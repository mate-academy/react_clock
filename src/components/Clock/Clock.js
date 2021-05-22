import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProp) {
    if (prevProp.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProp.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line
    console.log(this.state.time);
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    return (
      <span className="App__clock">
        {this.state.time}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
