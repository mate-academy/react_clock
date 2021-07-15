import React from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock clockName={clockName} />}
        <button
          type="button"
          onClick={
        () => {
          this.setState({
            isClockVisible: false,
          });
        }
      }
        >
          hide clock
        </button>
        <button
          type="button"
          onClick={
        () => {
          this.setState({
            isClockVisible: true,
          });
        }
      }
        >
          show clock
        </button>
        <button
          type="button"
          onClick={
        () => {
          const oldName = clockName;

          this.setState({ clockName: Math.trunc(Math.random() * 1000) }
          // eslint-disable-next-line
            , () => console.log(
              `The Clock was renamed from ${oldName} 
                to ${this.state.clockName}`,
            ));
        }
      }
        >
          new name
        </button>
      </div>
    );
  }
}

export default App;
