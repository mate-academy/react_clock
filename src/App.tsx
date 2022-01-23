import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  isClockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: false,
  };

  changeClockVisibility = (isClockVisible: boolean) => {
    this.setState({
      isClockVisible,
    });
  };

  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="button"
            onClick={() => {
              this.changeClockVisibility(false);
            }}
          >
            Hide Clock
          </button>
          <span> </span>
          <button
            type="button"
            className="button"
            onClick={() => {
              this.changeClockVisibility(true);
            }}
          >
            Show Clock
          </button>
        </div>
        <div>
          {
            this.state.isClockVisible === false
              ? (
                <h1 className="title">React Clock</h1>
              )
              : (
                <Clock />
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
