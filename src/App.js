import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
    oldName: 0,
  };

  render() {
    const { isClockVisible, clockName, oldName } = this.state;

    return (
      <div className="App">
        {isClockVisible
          ? <Clock name={clockName} />
          : <h1>App without clock</h1>
        }

        <button
          className="App__button"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => {
            const newName = Math.floor(Math.random() * 100);

            this.setState({ clockName: newName });
            // eslint-disable-next-line no-console
            console.log(
              `The Clock was renamed from ${oldName} to ${newName}`,
            );

            this.setState({ oldName: newName });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
