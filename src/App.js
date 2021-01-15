import React from 'react';
import Clock from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    clockName: '',
    isClockVisiable: true,
  };

  setRandom = () => {
    const randomName = Math.random();
    // eslint-disable-next-line
    console.log(`
    The Clock was renamed from ${this.state.name} to ${randomName}
    `);
    this.setState({ name: randomName });
  }

  render() {
    const { clockName, isClockVisiable } = this.state;

    return (
      <>
        {isClockVisiable
          ? <Clock name={clockName} />
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
