import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

const names: string[] = ['Mate', 'Academy', 'Mate academy', 'Academy mate'];

type State = {
  isVisible: boolean;
  name: string;
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
    name: 'Mate academy',
  };

  showClock = () => {
    this.setState({ isVisible: true });
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  };

  shuffleTitles = () => {
    this.setState(
      { name: names[Math.floor(Math.random() * names.length)] },
    );
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="clock">
          {(this.state.isVisible) && (<Clock name={this.state.name} />)}
        </div>
        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
        <button type="button" onClick={this.shuffleTitles}>
          Set random title
        </button>
      </div>
    );
  }
}

export default App;
