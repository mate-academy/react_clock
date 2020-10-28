import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Clock from './components/Clock/Clock';
import './App.scss';

class App extends Component {
  state = {
    isClockVisible: true,
    currentName: 0,
  }

  hiddenHandler = () => {
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  };

  changeNameHandler = () => {
    const newName = Math.floor(Math.random() * Math.floor(1000));

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${
      this.state.currentName
    } to ${newName}`);

    this.setState({
      currentName: newName,
    });
  };

  render() {
    const { isClockVisible, currentName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <h3>
          {`Name ${currentName}`}
        </h3>
        {isClockVisible && <Clock />}
        <ButtonGroup disableElevation variant="contained">
          <Button
            color={isClockVisible
              ? 'primary'
              : 'secondary'}
            onClick={this.hiddenHandler}
          >
            {isClockVisible
              ? 'Show clock'
              : 'Hide clock'}
          </Button>
          <Button
            color=""
            onClick={this.changeNameHandler}
          >
            Change name
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default App;
