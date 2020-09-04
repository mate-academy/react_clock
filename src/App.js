import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="clock">
          <p className="numbers">
            {this.state.date.toLocaleTimeString()}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
