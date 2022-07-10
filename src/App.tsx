import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock',
  };

  componentDidMount() {
    this.getRandomName();

    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    window.setInterval(() => this.getRandomName(), 3300);
  }

  getRandomName() {
    const value = Math.random().toString().slice(2, 6);

    this.setState({ clockName: `Clock-${value}` });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
