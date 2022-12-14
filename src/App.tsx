import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

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

  randomId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      this.clickContextMenu();
      event.preventDefault();
    });
    document.addEventListener('click', this.click);
    this.randomId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.clickContextMenu);
    document.removeEventListener('click', this.click);
    window.clearInterval(this.randomId);
  }

  clickContextMenu = () => this.setState({ hasClock: false });

  click = () => this.setState({ hasClock: true });

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
