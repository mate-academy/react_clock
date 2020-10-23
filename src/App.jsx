import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
    isClockVisible: 'visible',
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="App">
          <div className="App__clock">
            <h1>React clock</h1>
            <p style={{ visibility: `${this.state.isClockVisible}` }}>
              Current time:
              {' '}
              {this.state.date.toLocaleTimeString()}
            </p>
          </div>

          <div className="App__button button">
            <button
              type="button"
              className="button__show"
              onClick={() => {
                this.state.isClockVisible = 'visible';
              }}
            >
              show
            </button>

            <button
              type="button"
              className="button__hide"
              onClick={() => {
                this.state.isClockVisible = 'hidden';
              }}
            >
              hide
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
