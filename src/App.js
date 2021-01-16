import React from 'react';
import './App.scss';
import { Button } from '@material-ui/core';
import Clock from './Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: null,
  }

  showHandler = () => {
    this.setState({ isClockVisible: true });
  }

  hideHandler = () => {
    this.setState({ isClockVisible: false });
  }

  setRandomName = () => {
    this.setState({ clockName: new Date().toLocaleTimeString() });
    // eslint-disable-next-line no-console
    console.log(`
      The Clock was renamed from oldName to
      ${this.state.clockName}
    `);
  }

  render() {
    const { isClockVisible } = this.state;
    const { showHandler, hideHandler, setRandomName } = this;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible ? (
          <Clock name={this.state.clockName} />
        ) : (
          <p className="App_offer">cookies?</p>
        )}
        <div className="button-container">
          <Button
            type="button"
            className="button button__show"
            onClick={showHandler}
          >
            Show Clock
          </Button>
          <Button
            type="button"
            className="button button__hide"
            onClick={hideHandler}
          >
            Hide Clock
          </Button>
          <Button
            type="button"
            className="button button__stop"
            onClick={setRandomName}
          >
            New Name
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
