import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
  name: number,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    name: 0,
  };

  getRandomName = setInterval(() => this.setState(
    { name: Math.floor(Math.random() * 400) },
  ), 3300);

  componentDidMount() {
    const clear = document.getElementById('clear');
    const start = document.getElementById('start');

    if (clear) {
      clear.addEventListener('click', () => this.setState(
        { hasClock: false },
      ));
    }

    if (start) {
      start.addEventListener('click', () => this.setState(
        { hasClock: true },
      ));
    }
  }

  componentWillUnmount() {
    clearInterval(this.getRandomName);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        { hasClock
          ? <Clock name={this.state.name} />
          : <div className="App__name" />}

        <div className="App__container-button">
          <button
            type="button"
            id="start"
            className="App__button"
            disabled={hasClock}
          >
            Start
          </button>

          <button
            type="button"
            id="clear"
            className="App__button"
            disabled={!hasClock}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
