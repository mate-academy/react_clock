import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    const { date } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {date}
        </p>
      </div>
    );
  }
}

export default App;
