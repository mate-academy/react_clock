import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock №
          {clockName}
        </h1>

        <p>
          Current time:
          {isClockVisible && (
            <Clock
              isClockVisible={isClockVisible}
              name={clockName}
            />
          )}

          <button
            className="button"
            type="button"
            onClick={() => this.setState({ isClockVisible: true })}
          >
            Show Clock
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.setState({ isClockVisible: false })}
          >
            Hide Clock
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.setState({ clockName: getRandomInt(10) })}
          >
            Set random name
          </button>
        </p>
      </div>
    );
  }
}

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      // eslint-disable-next-line
      console.log(new Date().toLocaleTimeString());
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        {` ${this.state.date} `}
      </>
    );
  }
}

Clock.defaultProps = {
  name: 0,
};

Clock.propTypes = {
  name: PropTypes.number,
};

export default App;
