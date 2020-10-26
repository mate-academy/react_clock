import React from 'react';

import './App.scss';
import { Clock } from './clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 1,
  };

  visibilityClick = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  addRandomName = () => {
    const randomName = Math.round(Math.random() * 1000);
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.name} to ${randomName}`);
    this.setState({ name: randomName });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React Clock</h1>
        <Clock
          name={this.state.name}
          isVisible={this.state.isClockVisible}
        />

        <button
          className="App__button"
          type="button"
          onClick={this.visibilityClick}
        >
          Hide Clock
        </button>
        {' '}
        <button
          className="App__button"
          type="button"
          onClick={this.addRandomName}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
