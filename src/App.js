import React from 'react';

import './App.scss';
import Clock from './Components/Clock/CLock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    name: '',
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.prevName = prevState.name;

    // eslint-disable-next-line
    console.log(`The Clock was renamed from oldName to newName ${this.state.prevName} to ${this.state.name}`)
  }

  show = () => this.setState({ isClockVisible: true })

  hide = () => this.setState({ isClockVisible: false })

  changeName = () => {
    this.setState({ name: Math.trunc((Math.random() * 10)) });
  }

  render() {
    return (
      <div className="App">
        <h1>
          React clock
          {' '}
          {this.state.name}
        </h1>
        {this.state.isClockVisible && (
        <Clock />
        )}
        <button type="button" onClick={this.show}>Show</button>
        <button type="button" onClick={this.hide}>Hide</button>
        <button type="button" onClick={this.changeName}>Random name</button>
      </div>
    );
  }
}

export default App;
