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

  changeVisibilityOnClick = () => {
    this.setState(prevState => ({ isClockVisible: !prevState.isClockVisible }));
  }

  changeNameOnClick = () => {
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

        {isClockVisible
          ? <Clock />
          : <p>Empty</p>
        }

        <Button handleClick={this.changeVisibilityOnClick} />
        <ButtonSetName handleClick={this.changeNameOnClick} />
      </div>
    );
  }
}

export default App;
