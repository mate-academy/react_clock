import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="clock">
          {this.state.time.toLocaleTimeString().split(':').join(' : ')}
          <div className="strip" key={Math.random()} />
        </div>
      </div>
    );
  }
}

export default App;
