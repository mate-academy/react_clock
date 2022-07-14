import React from 'react';

import Clock from './components/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount = () => {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  };

  setRandomName = setInterval(() => this.setState(
    { clockName: getRandomName() },
  ), 3300);

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>

        <>
          <strong>
            {this.state.hasClock && <Clock clockName={this.state.clockName} />}
          </strong>
        </>
      </div>
    );
  }
}

export default App;
