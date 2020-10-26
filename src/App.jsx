import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: 'visible',
    name: 24,
  }

  nameRandomizer = () => (
    this.setState((prevState) => {
      const previousName = prevState.name;
      const currentName = Math.floor(Math.random() * 1000);

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${previousName} to ${currentName}`);

      return {
        name: currentName,
      };
    })
  );

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="wrapper">
        <div className="App">

          {this.state.isClockVisible === 'visible'
            ? <Clock name={name} />
            : <p className="App__clock-hidden">the aspect of time is relative:)</p>
          }

          <div className="App__button button">
            <button
              type="button"
              className="button__toggler"
              onClick={() => {
                isClockVisible === 'hidden'
                  ? this.setState({ isClockVisible: 'visible' })
                  : this.setState({ isClockVisible: 'hidden' });
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
}

export default App;
