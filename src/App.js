import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  componentDidUpdate(_, oldName) {
    const message = `The Clock was renamed from ${oldName.clockName}
    to ${this.state.clockName}`;

    if (oldName.clockName === this.state.clockName) {
      return;
    }
    // eslint-disable-next-line
    console.log(message);
  }

  hide = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  show = () => {
    const { isClockVisible } = this.state;

    if (isClockVisible) {
      return;
    }

    this.setState({
      isClockVisible: true,
    });
  };

  changeName = () => {
    this.setState({
      clockName: Math.round(Math.random() * 1000),
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__heading">React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <div className="button-wrapper">
          <button
            type="button"
            onClick={this.hide}
            className="App__button App__button-hide"
          >
            Hide
          </button>
          <button
            type="button"
            onClick={this.show}
            className="App__button App__button-show"
          >
            Show
          </button>
          <button
            type="button"
            onClick={this.changeName}
            className="App__button App__button-change"
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
