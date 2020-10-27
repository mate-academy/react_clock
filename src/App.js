import React from 'react';
import './App.scss';
import { Buttons } from './components/buttons/Buttons';
import { Clock } from './components/clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 'No name',
  }

  handleClick = () => {
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  }

  changeName = () => {
    const newName = `${Math.floor(Math.random() * 1000)}`;

    // eslint-disable-next-line no-console
    console.log(`the name has changed from ${this.state.name} to ${newName}`);
    this.setState({ name: newName });
  }

  render() {
    const { name, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible ? <Clock name={name} /> : <p>No clocks!</p>}
        <Buttons changeName={this.changeName} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
