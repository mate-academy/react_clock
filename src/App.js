
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 1604567890123,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  click = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  randomNameAdd = () => {
    const randomName = Date.now();
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.name} to ${randomName}`);
    this.setState({ name: randomName });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock name={this.state.name} isVisible={this.state.isClockVisible} />
        <button type="button" onClick={this.click}>
          Hide Clock
        </button>
        {' '}
        <button type="button" onClick={this.randomNameAdd}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
