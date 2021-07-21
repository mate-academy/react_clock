import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(this.clockInfo, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`You are damn right ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  clockInfo = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
    // eslint-disable-next-line
    console.log(this.state.time);
  }

  render() {
    return (
      <div className="app">
        <h1>React Clock</h1>
        <p>
          Current time:
          {' '}
          <span className="info">{this.state.time}</span>
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
