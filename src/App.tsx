import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
};

class App extends Component<{}, State> {
  state = {
    isClockVisible: true,
  };

  handlerButton(visible: boolean) {
    this.setState({
      isClockVisible: visible,
    });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => this.handlerButton(true)}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.handlerButton(false)}
        >
          Hide Clock
        </button>
        {isClockVisible && (<Clock data-cy="time" />)}
      </div>
    );
  }
}

export default App;
