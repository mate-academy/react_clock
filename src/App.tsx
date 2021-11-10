import React from 'react';
import './App.scss';
import Clock from './Clock';

type Props = {};
interface State {
  hasVisible: boolean;
}
class App extends React.Component<Props, State> {
  state: State = {
    hasVisible: true,
  };

  showClock = () => {
    this.setState({ hasVisible: true });
  };

  hideClock = () => {
    this.setState({ hasVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>Current time: </p>
        {this.state.hasVisible && <Clock />}
        <button type="button" onClick={this.showClock}>
          Show
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide
        </button>
      </div>
    );
  }
}

export default App;
