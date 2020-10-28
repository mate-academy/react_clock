import React from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    title: 'React Clock',
    clockName: 0,
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  changeNameOnClick = () => {
    const newName = Math.floor(Math.random() * 100);

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.clockName} to ${newName}`);
    this.setState({ clockName: newName });
  }

  render() {
    const { title, clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>
          {title}
          {' : '}
          {clockName}
        </h1>
        {isClockVisible && (<Clock />)}

        <button
          type="button"
          onClick={this.showClock}
          className="button"
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          className="button"
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.changeNameOnClick}
          className="button"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
