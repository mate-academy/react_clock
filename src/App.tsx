import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
      </div>
    );
  }
}

export default App;
