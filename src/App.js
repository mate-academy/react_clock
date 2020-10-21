import React from 'react';
import { Clock } from './components/Clock/Clock';
import { Button } from './components/Button/Button';
import { ButtonSetName } from './components/ButtonSetName';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isClockVisible: true,
      name: 1,
    };
  }

  changeVisibility = () => {
    this.setState(prevState => ({ isClockVisible: !prevState.isClockVisible }));
  }

  changeName = () => {
    const newName = Math.floor(Math.random() * 1000);

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.name} to ${newName}`);
    this.setState({ name: newName });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <p>
          Current time:
          {' '}
          <Clock isVisible={isClockVisible} />
        </p>

        <Button click={this.changeVisibility} />
        <ButtonSetName click={this.changeName} />
      </div>
    );
  }
}

export default App;
