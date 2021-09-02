import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number | string;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'Try to set my name!',
  };

  changeVisibility = () => this.setState(prevState => (
    { isClockVisible: !prevState.isClockVisible }));

  setName = () => this.setState({ clockName: Math.round(Math.random() * 100) });

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <main className="main">
        <div className="App">
          <h1>React clock</h1>

          <button
            className="button App__button"
            type="button"
            onClick={this.changeVisibility}
          >
            {isClockVisible ? 'Hide' : 'Show'}
          </button>

          {isClockVisible && <Clock clockName={clockName} />}

          <button
            className="button App__button"
            type="button"
            onClick={this.setName}
          >
            Set random name
          </button>
        </div>
      </main>
    );
  }
}

export default App;
