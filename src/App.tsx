import React from 'react';
import Clock from './components';
// import { isPropertySignature } from 'typescript';
import './App.scss';

type AppProp = {};
type AppState = {
  isClockVisible:boolean,
};

class App extends React.Component<AppProp, AppState> {
  state = {
    isClockVisible: true,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          Current time:
          {' '}
          {this.state.isClockVisible
            ? (<Clock isOn={this.state.isClockVisible} />)
            : null}
          <div className="buttons-container">
            <button
              className="buttons-container__button--show button"
              type="button"
              onClick={() => this.setState({ isClockVisible: true })}
            >
              Show Clock
            </button>
            <button
              className="buttons-container__button--hide button"
              type="button"
              onClick={() => this.setState({ isClockVisible: false })}
            >
              Hide Clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
