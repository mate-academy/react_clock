import { Component } from 'react';
import { Clock } from './components/Сlock';
import './App.scss';

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

  componentDidMount() {
    document.addEventListener('contextmenu', this.mouseClick);
    document.addEventListener('click', this.mouseClick);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.mouseClick);
    document.removeEventListener('click', this.mouseClick);
  }

  mouseClick = (event: MouseEvent) => {
    event.preventDefault();
    if (event.button === 2) {
      this.setState({ hasClock: false });
    }

    if (event.button === 0) {
      this.setState({ hasClock: true });
    }
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
