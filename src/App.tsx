import React from 'react';
import './App.scss';

import Clock from './components';

type State = {
  isVisible: boolean,
  number: number,
};

const getRandom = ():number => {
  return Math.floor(Math.random() * 100);
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
    number: 2,
  };

  setShow = () => {
    this.setState({
      isVisible: true,
    });
  };

  setHide = () => {
    this.setState({
      isVisible: false,
    });
  };

  getChangeNumber = () => {
    this.setState({
      number: getRandom(),
    });
  };

  render() {
    const { isVisible, number } = this.state;

    return (
      <div className="App">
        <h1>CLOCK</h1>
        <div>
          { isVisible && <Clock name={number} /> }
        </div>
        <div>
          <button
            type="button"
            onClick={this.setShow}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.setHide}
          >
            Hide Clock
          </button>
        </div>
        <button
          type="button"
          onClick={this.getChangeNumber}
          disabled={!isVisible}
        >
          Get Random
        </button>
      </div>
    );
  }
}

export default App;
