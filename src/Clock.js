import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  timer = setInterval(() => {
    this.setState({ date: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="subtitle is-2">
        Current time:
        {' '}
        <span>{date.toLocaleTimeString()}</span>
        <p className="subtitle is-4">
          {name === 'Gerund'
            ? ''
            : `The Clock was renamed from oldName to ${name}`}

          {' '}
        </p>
        {/* eslint-disable-next-line no-console */}
        {console.log(date.toLocaleTimeString())}
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
