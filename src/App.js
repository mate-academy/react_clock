import React from 'react';
import Clock from './components/Clock';
import Button from './components/Button';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  hide = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  show = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  makeNewName = () => {
    const oldName = this.state.clockName;

    this.setState({ clockName: Math.trunc(Math.random() * 1000) }
    // eslint-disable-next-line
      , () => console.log(
        `The Clock was renamed from ${oldName} 
        to ${this.state.clockName}`,
      ));
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock clockName={clockName} />}
        <Button action={this.show} text="show clock" />
        <Button action={this.hide} text="hide clock" />
        <Button action={this.makeNewName} text="new name" />
      </div>
    );
  }
}

export default App;
