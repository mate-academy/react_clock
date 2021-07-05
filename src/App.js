import React from 'react';

import './App.scss';

export class App extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
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
          {date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default App;
