import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  showBtnClick = () => {
    this.setState({ isClockVisible: true });
  }

  hideBtnClick = () => {
    this.setState({ isClockVisible: false });
  }

  renameBtnClick = () => {
    this.setState({ clockName: Math.random() });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {
          (!this.state.isClockVisible
            && (
              <button
                type="button"
                id="showBtn"
                onClick={this.showBtnClick}
              >
                Show Clock
              </button>
            ))}

        {
          (this.state.isClockVisible
            && (
              <button
                type="button"
                id="hideBtn"
                onClick={this.hideBtnClick}
              >
                Hide Clock
              </button>
            ))}

        <button
          type="button"
          id="renameBtn"
          onClick={this.renameBtnClick}
        >
          Rename
        </button>
        {
          (this.state.isClockVisible
            && (<Clock name={this.state.clockName} />))
        }
      </div>
    );
  }
}

export default App;
