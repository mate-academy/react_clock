import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-1',
  };

  componentDidMount() {
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);
  }

  getRandomName = setInterval(() => {
    const randomName = Math.random().toString().slice(2, 6);

    this.setState({ clockName: `Clock-${randomName}` });
  }, 3300);

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <hr />

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
