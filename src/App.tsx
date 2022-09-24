import { Component } from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdOne = 0;

  componentDidMount() {
    this.timerIdOne = window.setInterval(() => {
      if (this.state.hasClock) {
        this.setState({ clockName: getRandomName() });
      }
    }, 3300);

    document.addEventListener('click', this.handleLeftButton);
    document.addEventListener('contextmenu', this.handleRightButton);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdOne);
    document.removeEventListener('click', this.handleLeftButton);
    document.removeEventListener('contextmenu', this.handleRightButton);
  }

  handleLeftButton = () => {
    this.setState({ hasClock: true });
  };

  handleRightButton = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock && (
          <Clock
            name={clockName}
          />
        )}
      </div>
    );
  }
}
