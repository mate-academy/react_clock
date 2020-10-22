import React from 'react';

import './App.scss';
import { Button } from './components/Button';
import { Clock } from './components/Clock';
import { generateNumber } from './helper';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 100,
  };

  handleClick = () => {
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  }

  changeName = () => {
    const newName = generateNumber(100);

    // eslint-disable-next-line no-console
    console.log(`the name has changed from ${this.state.name} to ${newName}`);
    this.setState({ name: newName });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {
          this.state.isClockVisible
            ? <Clock name={this.state.name} />
            : <div>No clocks!</div>
        }
        <div className="btn-group">
          <Button click={this.handleClick} text="Clock visibility" />
          <Button click={this.changeName} text="Name changer" />
        </div>
      </div>
    );
  }
}

export default App;
