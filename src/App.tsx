import './App.scss';
import { Component } from 'react';
import { Clock } from './components/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock 1',
  };

  // eslint-disable-next-line react/sort-comp
  componentDidMount() {
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);
  }

  timerId = setInterval(() => {
    const randomName = Math.random().toString().slice(2, 6);

    this.setState({ clockName: `Clock ${randomName}` });
  }, 3000);

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div>
        <h1>React clock</h1>

        <div>
          <div>{ hasClock && <Clock name={clockName} />}</div>
        </div>
      </div>
    );
  }
}

export default App;
