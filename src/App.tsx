import React from 'react';
import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isVisible: true,
  };

  hideShow = () => {
    const visible = this.state.isVisible;

    this.setState({ isVisible: !visible });
  };

  render(): React.ReactNode {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          Current time:
          {' '}
          {(isVisible) && <Clock />}
          <div>
            <button
              type="button"
              className="hideShow"
              onClick={this.hideShow}
            >
              {(isVisible) ? 'Hide time' : 'Show time'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
