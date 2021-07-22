import React from 'react';
import { clockPropTypes } from './types';

import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      this.setState({ time: date });
      // eslint-disable-next-line no-console
      console.log(date);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name}
      to ${name}.`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <span className="time">
          {this.state.time}
        </span>
      </>
    );
  }
}

Clock.propTypes = clockPropTypes;
