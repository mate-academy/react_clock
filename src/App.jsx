import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
    isClockVisible: 'visible',
    name: 1,
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  nameRandomizer() {
    this.setState({ name: Math.floor(Math.random() * 1000) });
  }

  render() {
    const { date, isClockVisible } = this.state;

    return (
      <div className="wrapper">
        <div className="App">
          <div className="App__clock">
          <h1>{`React clock #${this.state.name}`}</h1>
            <p></p>
            <p style={{ visibility: `${isClockVisible}` }}>
              Current time:
              {' '}
              {date.toLocaleTimeString()}
            </p>
          </div>

          <div className="App__button button">
            <button
              type="button"
              className="button__toggler"
              onClick={() => {
                isClockVisible === 'hidden'
                  ? this.setState({ isClockVisible: 'visible'} )
                  : this.setState({ isClockVisible: 'hidden'} );
              }}
            >
              {this.state.isClockVisible === 'visible' ? 'hide' : 'show'}
            </button>

            <button
              type="button"
              className="button__magic"
              onClick={() => this.nameRandomizer()}
            >
              magic
            </button>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  isClockVisible: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
}

export default App;
