import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({
        date: new Date(),
      }), 1000,
    );
  }

  render() {
    const { date } = this.state;

    return (
      <div className="App">
        <h1 className="heading">React clock</h1>
        <p className="title">
          Current time:
          {' '}
          <span className="time">
            {date.toLocaleTimeString()}
          </span>
        </p>
      </div>

    );
  }
}

export default App;
