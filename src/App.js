import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.showBtnClick = this.showBtnClick.bind(this);
    this.hideBtnClick = this.hideBtnClick.bind(this);
    this.renameBtnClick = this.renameBtnClick.bind(this);
  }

  state = {
    isClockVisible: true,
    clockName: 0,
  }

  showBtnClick() {
    document.querySelector('#showBtn').classList.add('hidden');
    document.querySelector('#hideBtn').classList.remove('hidden');

    this.setState({ isClockVisible: true });
  }

  hideBtnClick() {
    document.querySelector('#hideBtn').classList.add('hidden');
    document.querySelector('#showBtn').classList.remove('hidden');

    this.setState({ isClockVisible: false });
  }

  renameBtnClick() {
    this.setState({ clockName: Math.random() });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          id="showBtn"
          className="hidden"
          onClick={this.showBtnClick}
        >
          Show Clock
        </button>

        <button
          type="button"
          id="hideBtn"
          onClick={this.hideBtnClick}
        >
          Hide Clock
        </button>

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
