import React from 'react';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
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
