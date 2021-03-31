import React from 'react';

import './App.scss';
import Clock from './components/Clock/Clock';

class App extends React.Component {
  state = {
    clockVisible: true,
    date: new Date().toLocaleTimeString(),
    clockName: Math.ceil(Math.random() * 100),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });

      if (this.state.clockVisible) {
        // eslint-disable-next-line
        console.log(this.state.date);
      }
    }, 1000);
  }

  render() {
    const { clockVisible, clockName, date } = this.state;

    return (
      <>
        <div className="app">
          <h1 className="app__title">React clock</h1>
          <p className="app__description">
            { clockVisible && <Clock name={clockName} time={date} />}
          </p>

          <div className="app__buttons">
            <button
              type="button"
              className="app__button"
              onClick={() => {
                this.setState({
                  clockVisible: true,
                });
              }}
            >
              Show Clock
            </button>
            <button
              type="button"
              className="app__button"
              onClick={() => {
                this.setState({
                  clockVisible: false,
                });
              }}
            >
              Hide Clock
            </button>
            <button
              type="button"
              className="app__button"
              onClick={() => {
                this.setState({
                  clockName: Math.ceil(Math.random() * 100),
                });
              }}
            >
              Random Name
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
