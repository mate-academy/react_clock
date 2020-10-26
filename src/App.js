import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Clock } from './components/Clock';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  state = {
    isClockVisible: true,
    name: 1,
  };

  toggleClockVisibility = () => {
    this.setState(prevState => (
      { isClockVisible: !prevState.isClockVisible }
    ));
  }

  generateNewName = () => {
    const newName = Math.floor(Math.random() * 1000) + 1;

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${this.state.name} to ${newName}`);
    this.setState({ name: newName });
  }

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div
        className="App p-5 bg-primary container text-center text-light rounded"
      >
        {isClockVisible ? (
          <Clock name={name} isVisible={isClockVisible} />
        ) : (
          <div
            className="mb-5 p-3 bg-danger text-light rounded"
          >
            Oooooops, it seems like you have just broke our Clock down
          </div>
        )}
        <div>
          <Button
            className="btn-info m-3"
            onClick={this.toggleClockVisibility}
          >
            {isClockVisible
              ? 'Kill Clock'
              : 'Invoke Clock'
            }
          </Button>
          <Button
            className="btn-secondary m-3"
            onClick={this.generateNewName}
          >
            Set new name
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
