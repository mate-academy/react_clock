import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    clockIsVisible: true,
    clockName: 0,
  }

  render() {
    const { clockIsVisible } = this.state;

    return (
      <>
        <div className="Container">
          <h1 className="Title">React clock</h1>
          <div className="App">
            <div className="App__button-wrapper">
              <button
                type="button"
                className="App__button"
                onClick={() => {
                  this.setState({ clockIsVisible: true });
                }}
              >
                Show Clock
              </button>
              <button
                type="button"
                className="App__button"
                onClick={() => {
                  this.setState({ clockIsVisible: false });
                }}
              >
                Hide Clock
              </button>
              <button
                type="button"
                className="App__button"
                onClick={() => {
                  const randomNumber = Math.ceil(Math.random() * 10);

                  this.setState({ clockName: randomNumber });
                }}
              >
                Set random name
              </button>
            </div>
            { clockIsVisible && (
            <Clock name={this.state.clockName} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
