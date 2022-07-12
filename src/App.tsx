// import React from 'react';
import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hesClock: boolean,
};

class App extends Component<{}, State> {
  state = {
    hesClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hesClock: false });
    });

    document.addEventListener('click', this.hendleLeftClick);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  hendleLeftClick = () => {
    this.setState({ hesClock: true });
  };

  render() {
    const { hesClock, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>

        <div className="clock">
          {hesClock && (
            <Clock clockName={clockName} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
