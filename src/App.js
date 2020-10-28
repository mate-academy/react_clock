import React from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 0,
  }

  clockToggle = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  changeName = () => (
    this.setState((prevState) => {
      const newName = Math.floor(Math.random() * 100);

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.name} to ${newName}`);

      return {
        name: newName,
      };
    })
  );

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <button type="button" onClick={this.clockToggle}>
          {isClockVisible ? 'Hide clock' : 'Show clock'}
        </button>
        <button type="button" onClick={this.changeName}>
          Change name
        </button>

        {isClockVisible
          ? <Clock name={name} />
          : <div />
        }
      </div>
    );
  }
}

export default App;
