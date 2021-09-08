import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible:boolean;
  clockName:number;
};

class App extends React.Component {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  logNewName() {
    const oldName = this.state.clockName;
    const newName = Math.floor(Math.random() * 10);

    this.setState({
      clockName: newName,
    });

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldName} to ${newName}`);
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">React clock</h1>
        <p className="mainText">
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
          className="button button__show"
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
          className="button button__hide"
        >
          Hide clock
        </button>
        <button
          type="button"
          onClick={this.logNewName.bind(this)}
          className="button button__create-name"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
