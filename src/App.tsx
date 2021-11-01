import React from 'react';
import './App.scss';
import Clock from './Components/Clock';

type State = {
  name: string;
  isClockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    name: '1',
    isClockVisible: true,
  };

  render() {
    const handleSwitcher = () => {
      this.setState(prev => ({ isClockVisible: !prev.isClockVisible }));
    };

    const setRandomName = () => {
      this.setState({ name: String(Math.round(Math.random() * 100)) });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.name} />}
        </p>
        <button type="button" onClick={handleSwitcher}>
          Show/Hide
        </button>
        <button
          type="button"
          onClick={setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
