import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

const getRandomName = (): string => {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.getNewClockName, 3300);
    document.addEventListener('contextmenu', this.handleRightButtonClick);
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('click', this.handleLeftButtonClick);
  }

  componentDidUpdate(prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`)
    }
  }

componentWillUnmount() {
  document.removeEventListener('click', this.handleLeftButtonClick);
  document.removeEventListener('contextmenu', this.handleRightButtonClick);
  clearInterval(this.timerId);
  console.log('GAME OVER');
}

  handleRightButtonClick = () => {
    this.setState({ hasClock: false});
    clearInterval(this.timerId);
  }

  handleLeftButtonClick = () => {
    this.setState({ hasClock: true});
    this.timerId = window.setInterval(this.getNewClockName , 3300);
  };

  getNewClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  render(): React.ReactNode {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
