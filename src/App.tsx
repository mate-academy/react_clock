import React from 'react';
import './App.scss';
import { Clock, StateApp } from './Clock';

type Props = {};

export class App extends React.Component<Props, StateApp> {
  state = {
    isClockVisible: true,
  };

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        {isClockVisible && <div><Clock state={this.state} /></div>}
        <button
          type="button"
          className="button button__show-clock"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="button button__hide-clock"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}
<<<<<<< HEAD

export default App;
=======
>>>>>>> eba7a9e (show and hide buttons added)
