import React from 'react';

import './App.scss';
import { Button } from './components/Button';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 'clocks',
  };

  click = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  generateNumber = max => Math.floor(Math.random() * Math.floor(max))

  changeName = () => {
    const newName = this.generateNumber(100);

    // eslint-disable-next-line no-console
    console.log(`the name has changed from ${this.state.name} to ${newName}`);
    this.setState({ name: newName });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock status={this.state.isClockVisible} name={this.state.name} />
        <Button click={this.click} />
        <button type="button" onClick={this.changeName}>Name changer</button>
      </div>
    );
  }
}

export default App;
