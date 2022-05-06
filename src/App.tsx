import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  Visible = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <button
          type="button"
          className="App__button-show App__button"
          onClick={this.Visible}
        >
          Show Clock
        </button>
        <div className="App__text">
          Current time:
          {this.state.isClockVisible
            ? <Clock name={this.state.clockName} />
            // eslint-disable-next-line react/no-unescaped-entities
            : <span className="App__text-green"> "click upper button"</span>}
        </div>
        <button
          type="button"
          className="App__button-hide App__button"
          onClick={() => (this.setState({ isClockVisible: false }))}
        >
          Hide Clock
        </button>

        <button
          type="button"
          className="App__button-name App__button"
          onClick={() => this.setState({
            clockName:
             Math.round(Math.random() * 100),
          })}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
