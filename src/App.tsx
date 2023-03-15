import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);

    document.addEventListener('contextmenu', this.rightButtomClick);
    document.addEventListener('click', this.leftButtomClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.rightButtomClick);
    document.removeEventListener('click', this.leftButtomClick);
  }

  rightButtomClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftButtomClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
