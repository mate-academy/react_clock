import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

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
    const randomName = Math.ceil(Math.random() * 1000);
    // eslint-disable-next-line
    console.log(`
      The Clock was renamed from ${this.state.name} to ${randomName}
    `);
    this.setState({ name: randomName });
  }

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">React Clock</h1>
        {isClockVisible ? (
          <Clock name={name} isVisible={isClockVisible} />
        ) : (
          <div className="clock__break">
            Time to Coffee
          </div>
        )}

        <button
          className="app__button"
          type="button"
          onClick={this.visibilityClick}
        >
          {isClockVisible ? 'Hide' : 'Show Clock'}
        </button>

        <button
          className="app__button"
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
