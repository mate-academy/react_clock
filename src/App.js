import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    time: new Date().toLocaleTimeString('en-GB'),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString('en-GB'),
      });
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {time}
        </p>
      </div>
    );
  }
}

export default App;
