import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import fetchName from './helper/fetchName';

class App extends React.Component {
  state = {
    clockName: 'Fruit',
    isClockVisible: true,
  };

  changeNameHandler = async () => {
    this.setState({
      clockName: await fetchName(),
    });
  };

  changeToggleStateFalse = () => {
    if (this.state.isClockVisible) {
      this.setState({
        isClockVisible: false,
      });
    }

    return this.setState({
      isClockVisible: false,
    });
  };

  changeToggleStateTrue = () => {
    if (!this.state.isClockVisible) {
      this.setState({
        isClockVisible: true,
      });
    }

    return this.setState({
      isClockVisible: true,
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div>
        <Clock
          name={clockName}
          isClockVisible={isClockVisible}
        />
        <button
          disabled={isClockVisible}
          type="button"
          onClick={this.changeToggleStateTrue}
        >
          Show Clock
        </button>
        <button
          disabled={!isClockVisible}
          type="button"
          onClick={this.changeToggleStateFalse}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.changeNameHandler}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
