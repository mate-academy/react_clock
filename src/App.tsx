import React from 'react';
import './App.scss';

import { Clock } from './components';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  show = () => {
    this.setState({ isClockVisible: true });
  };

  hide = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <>
        <h1>React clock</h1>
        <div className="App">

          <div className="App__clock">
            {
              this.state.isClockVisible
                ? <Clock />
                : 'Здесь были часы'
            }
          </div>

          <div className="App__button">
            <button
              type="button"
              onClick={this.show}
              className="App__button--show"
            >
              Show
            </button>
            <button
              type="button"
              onClick={this.hide}
              className="App__button--hide"
            >
              Hide
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
