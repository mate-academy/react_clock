import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  visibleClock = () => {
    this.setState({ isClockVisible: true });
  }

  hiddenClock = () => {
    this.setState({ isClockVisible: false });
  }

  randomName = () => {
    this.setState({ clockName: Math.random() });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible ? <Clock name={this.state.clockName} /> : ''}
        <Button
          variant="primary"
          onClick={this.visibleClock}
        >
          Show Clock
        </Button>
        <Button
          variant="secondary"
          onClick={this.hiddenClock}
        >
          Hide Clock
        </Button>
        <Button
          variant="success"
          onClick={this.randomName}
        >
          Set random name
        </Button>
      </div>
    );
  }
}

export default App;
