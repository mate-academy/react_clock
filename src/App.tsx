import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

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

  clockTimerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleDocCLickRight);

    document.addEventListener('click', this.handleDocCLickLeft);

    this.clockTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleDocCLickRight);

    document.removeEventListener('click', this.handleDocCLickLeft);

    window.clearInterval(this.clockTimerId);
  }

  handleDocCLickLeft = () => {
    this.setState({ hasClock: true });
  };

  handleDocCLickRight = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          this.state.hasClock
          && <Clock name={clockName} />
        }
      </div>
    );
  }
}
