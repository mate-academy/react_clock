import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hideClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hideClock: false,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleRightClick);
  }

  handleRightClick = (event: Event) => {
    event.preventDefault();
    this.setState({ hideClock: true });
  };

  handleLeftClick = () => {
    this.setState({ hideClock: false });
  };

  render() {
    const { clockName, hideClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {!hideClock && (<Clock clockName={clockName} />)}
      </div>
    );
  }
}

export default App;
