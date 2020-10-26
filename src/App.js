import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    visible: true,
    clockName: 0,
  };

  handleTimer = () => {
    this.setState(state => ({
      visible: !state.visible,
    }));
  }

  generateName = () => {
    const newName = Math.floor(Math.random() * 100);

    this.setState({ clockName: newName });
    // eslint-disable-next-line no-console
    console.log(
      `The Clock was renamed from ${this.state.clockName} to ${newName}`,
    );
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.visible && (<Clock name={this.state.clockName} />)}

        <button
          className="App__btn"
          type="button"
          onClick={this.handleTimer}
        >
          {this.state.visible ? 'Hide' : 'Open'}
        </button>

        <button
          className="App__btn"
          type="button"
          onClick={this.generateName}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
