import React from 'react';

import './Clock.css';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date();

      this.setState({ date: date.toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.clockName} 
      to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <h1>React clock</h1>
        <p>
          {`Current time: ${this.state.date} 
          and name of clock: ${this.props.clockName}`}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number,
};

Clock.defaultProps = {
  clockName: '',
};
