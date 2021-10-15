
import React from 'react';
import './App.scss';
import Clock from './Clock';

export type State = {
   isClockVisible: boolean;
   clockName: number;
 };

 class App extends React.Component<{}, State> {
   state = {
     isClockVisible: true,
     clockName: 0,
   };

   hideClock = () => {
     this.setState({ isClockVisible: false });
   };

   showClock = () => {
     this.setState({ isClockVisible: true });
   };

   setRandomName = () => {
     this.setState({ clockName: Math.floor(Math.random() * 100) });
   };

  render() {
    const {
      isClockVisible,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>
          {'React clock '}
          {clockName}
        </h1>
        <div className="clock">
          <div className="clock__wrap">
            <h2 className="clock__info">
              {'Current time: '}
              {isClockVisible && <Clock name={clockName} />}
            </h2>
          </div>
          <div className="button-section">
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
              onClick={this.setRandomName}
              className="button"
            >
              Random name
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
