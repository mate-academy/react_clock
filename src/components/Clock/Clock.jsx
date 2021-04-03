import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({ time: new Date() }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;

    // eslint-disable-next-line
    console.log(time.toLocaleTimeString());

    return (
      <div className="Clock panel">
        <div className="panel-heading">
          React clock
        </div>
        <div className="panel-block p-5">
          <p>
            Current time:
            {' '}
            <strong>{time.toLocaleTimeString()}</strong>
          </p>
        </div>
        <div className="panel-block pl-5">
          <p className="is-size-7">
            Name:
            {' '}
            {this.props.name}
          </p>
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
