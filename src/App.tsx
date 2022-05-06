import React from 'react';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  name: number,
  visible: boolean,
};

class App extends React.Component<Props, State> {
  state = {
    name: 0,
    visible: true,
  };

  hideClock = () => {
    this.setState({
      visible: false,
    });
  };

  showClock = () => {
    this.setState({
      visible: true,
    });
  };

  rendomStr = () => {
    const rendomStr = Math.ceil(Math.random() * 100);

    this.setState({
      name: rendomStr,
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <button type="button" onClick={this.showClock}>Show clock</button>
          <button type="button" onClick={this.hideClock}>Hide clock</button>
          <button type="button" onClick={this.rendomStr}>
            Rendom number in console
          </button>

          {this.state.visible && <Clock name={this.state.name} />}
        </div>
      </>
    );
  }
}

export default App;
