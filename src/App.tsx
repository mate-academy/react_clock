import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.handleLeftBtnMouse();
      }

      if (e.button === 2) {
        this.handleRightBtnMouse();
      }
    });
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    document.removeEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.handleLeftBtnMouse();
      }

      if (e.button === 2) {
        this.handleRightBtnMouse();
      }
    });
  }

  handleLeftBtnMouse = () => {
    this.setState({ hasClock: true });
  };

  handleRightBtnMouse = () => {
    this.setState({ hasClock: false });
  };

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
