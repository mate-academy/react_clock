
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 55,
  };

  handleClick = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  addRandomName = () => {
    const randomName = Math.ceil(Math.random() * 100);
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.name} to ${randomName}`);
    this.setState({ name: randomName });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock name={this.state.name} isVisible={this.state.isClockVisible} />
        <button type="button" onClick={this.handleClick}>
          Hide Clock
        </button>
        {' '}
        <button type="button" onClick={this.addRandomName}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
