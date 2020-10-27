import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    name: this.props.name,
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        name: this.props.name,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString(),
    });
    // eslint-disable-next-line no-console
    console.log(this.state.date);
  }

  render() {
    return (
      <div className="clock">
        <h1 className="App__title">
          React clock №
          {this.state.name}
        </h1>
        <p>
          Current time:
          <br />
        </p>
        <h2>{this.state.date}</h2>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export { Clock };
