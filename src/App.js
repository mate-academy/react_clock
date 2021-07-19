import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

class App extends React.Component {
  state = {
    clockName: 0,
  }

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100000) });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          clockName={this.state.clockName}
          changeName={this.changeName}
        />
      </div>
    );
  }
}
export default App;
