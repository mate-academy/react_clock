import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Clock from './components/Clock/Clock';
import './App.scss';

class App extends Component {
  state = {
    hidden: false,
    currentName: 0,
    prevName: 0,
    max: 1000,
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.prevName !== this.state.prevName
      || prevState.currentName !== this.state.currentName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${this.state.prevName} to ${this.state.currentName}`);
    }
  }

  hiddenHandler = () => (
    this.setState(prevState => ({
      hidden: !prevState.hidden,
    }))
  );

  changeNameHandler = () => (
    this.setState(prevState => ({
      prevName: prevState.currentName,
      currentName: Math.floor(Math.random() * Math.floor(prevState.max)),
    }))
  );

  render() {
    const { hidden, currentName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <h3>
          {`Name ${currentName}`}
        </h3>
        <Clock
          hidden={hidden}
        />
        <ButtonGroup disableElevation variant="contained">
          <Button
            color={hidden
              ? 'primary'
              : 'secondary'}
            onClick={this.hiddenHandler}
          >
            {hidden
              ? 'Show clock'
              : 'Hidden clock'}
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
