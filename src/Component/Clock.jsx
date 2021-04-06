import React from 'react';
import PropTypes from 'prop-types';

import './clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(previosPpops) {
    const { clockName } = this.props;

    if (previosPpops.clockName !== clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${previosPpops.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <>
        {`Time: ${date.toLocaleTimeString()}`}
        <span className="tag is-large">{clockName}</span>
      </>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
