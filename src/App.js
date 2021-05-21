import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
    // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.name} to ${this.state.name}`);
    }
  }

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App">
        <h1>
          {`React clock ${name}`}
        </h1>
        <p>
          {'Current time: '}
          {isClockVisible ? <Clock name={this.state.name} /> : null}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              name: Math.floor(Math.random() * 1000),
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
