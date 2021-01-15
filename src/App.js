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

  visibleClock = ({ target }) => {
    if (target.innerText === 'Show Clock') {
      this.setState({ isClockVisible: true });
    } else if (target.innerText === 'Hide Clock') {
      this.setState({ isClockVisible: false });
    }
  }

  createRandomName = () => {
    this.setState({ clockName: Math.random() });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={this.state.clockName} />}
        <Button
          variant="primary"
          onClick={this.visibleClock}
        >
          Show Clock
        </Button>
        <Button
          variant="secondary"
          onClick={this.visibleClock}
        >
          Hide Clock
        </Button>
        <Button
          variant="success"
          onClick={this.createRandomName}
        >
          Set random name
        </Button>
      </div>
    );
  }
}

export default App;
