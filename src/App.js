import React from 'react';

import names from './data/names';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 0,
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line no-console
      console.log(`
        The Clock was renamed from ${prevState.name} to ${this.state.name}`);
    }
  }

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <>
        <div className="current-time">
          {`Current time: `}
          {isClockVisible ? <Clock /> : 'hidden'}
        </div>
        <p>
          Random name is
          <b>
            {' '}
            {name}
          </b>
        </p>

        <div className="buttons">
          <button
            className="buttons__button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          <button
            className="buttons__button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>
          <button
            className="buttons__button"
            type="button"
            onClick={() => {
              this.setState({
                name: names[Math.floor(Math.random() * names.length)],
              });
            }}
          >
            Random Name
          </button>
        </div>
      </>
    );
  }
}

export default App;
