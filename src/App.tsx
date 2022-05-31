import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="mainTitle">React clock</h1>

          <p className="currentTime">
            {'Current time: '}
            {isClockVisible && (
              <Clock />
            )}
          </p>

          <div className="btnWrapper">
            <button
              type="button"
              className="btn"
              onClick={() => (
                this.setState({ isClockVisible: true })
              )}
            >
              Show Clock
            </button>

            <button
              type="button"
              className="btn"
              onClick={() => (
                this.setState({ isClockVisible: false })
              )}
            >
              Hide Clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
