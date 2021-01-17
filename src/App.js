import React from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 'ГОДИННИК',
  };

  render() {
    return (
      <>
        { this.state.isClockVisible
          && <Clock name={this.state.clockName} />
        }

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            const oldName = this.state.clockName;
            const randomPartOfName = getRandomInteger(1, 1000);

            this.setState({ clockName: `ГОДИННИК${randomPartOfName}` });
            if (this.state.isClockVisible === false) {
              // eslint-disable-next-line
              console.log(`The Clock was renamed from ${oldName} to ГОДИННИК${randomPartOfName}`);
            }
          }}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default App;
