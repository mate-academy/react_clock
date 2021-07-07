import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__heading">React clock</h1>
        <h2 className="App__time">
          {`Current time: ${this.state.date.toLocaleTimeString()}.`}
        </h2>
      </div>
    );
  }
}

export default App;
