import React from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    clockWisible: true,
  }

  wisibility = () => {
    this.setState(prevState => ({
      clockWisible: !prevState.clockWisible,
    }));
  }

  render() {
    return (
      <>
        <button
          type="button"
          onClick={this.wisibility}
        >
          clock
        </button>
        { this.state.clockWisible && <Clock name={this.state} />}
      </>
    );
  }
}

export default App;
