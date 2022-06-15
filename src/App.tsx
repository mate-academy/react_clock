import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

const arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
  'adipisicing', 'elit', 'Excepturi', 'corporis'];

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: arr[0],
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App card-body text-center">
        <h1 className="fs-3">React clock</h1>
        {isClockVisible && (
          <Clock name={clockName} />
        )}

        <button
          type="button"
          className="
            btn
            btn-info
            me-2
            rounded
          "
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="
            btn
            btn-danger
            me-2
            rounded
          "
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          className="
            btn
            btn-warning
            me-2
            rounded
          "
          onClick={() => {
            this.setState({
              clockName: arr[Math.floor(Math.random() * arr.length)],
            });
          }}
        >
          Set random name
        </button>

      </div>
    );
  }
}

export default App;
