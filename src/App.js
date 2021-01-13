import React from 'react';
import Clock from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisiable: true,
  };

  setRandom = () => {
    this.setState(
      {
        clockName: Math.random(),
      },
    );

    // eslint-disable-next-line no-console
    console.log(
      `The Clock was renamed from oldName to ${this.state.clockName}`,
    );
  }

  render() {
    return (
      <>
        {this.state.isClockVisiable
          ? <Clock name={this.state.clockName} />
          : ''
        }
        <button
          type="button"
          onClick={() => {
            this.setState(
              {
                isClockVisiable: true,
              },
            );
          }}
        >
          ShowClock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState(
              {
                isClockVisiable: false,
              },
            );
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => this.setRandom()}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default App;
