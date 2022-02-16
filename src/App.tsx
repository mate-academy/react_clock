import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  visible: boolean,
  nameClock: number,
};

class App extends React.Component<{}, State> {
  state = {
    visible: true,
    nameClock: 0,
  };

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.nameClock !== this.state.nameClock && prevProps) {
      // eslint-disable-next-line no-console
      console.log(`new name is ${this.state.nameClock}`);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.visible && <Clock />}
        <button
          type="button"
          onClick={() => {
            this.setState({ visible: true });
          }}
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ visible: false });
          }}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ nameClock: Math.random() });
          }}
        >
          rename clock
        </button>
      </div>
    );
  }
}

export default App;
