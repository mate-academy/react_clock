import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  clockName: string,
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock №1',
  };

  componentDidMount() {
    document.addEventListener('click', this.visibleClock);
    document.addEventListener('contextmenu', this.hiddenClock);
  }

  setRandomName = setInterval(() => {
    const randomName = Math.random().toString().slice(2, 6);

    this.setState({ clockName: `Clock №${randomName}` });
  }, 3300);

  visibleClock = () => {
    this.setState({ hasClock: true });
  };

  hiddenClock = () => {
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="App__clock">
          <div>{ hasClock && <Clock name={clockName} />}</div>
        </div>
      </div>
    );
  }
}

export default App;
