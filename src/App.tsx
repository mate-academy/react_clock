import { Component } from 'react';
import './App.scss';
import { Clock } from './Component/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: getRandomName(),
    hasClock: true,
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('click', this.handleDocumentClickUp);
    document.addEventListener('contextmenu', this.handleDocumentClickDown);
  }

  handleDocumentClickUp = () => {
    this.setState({
      hasClock: true,
    });
  };

  handleDocumentClickDown = () => {
    this.setState({
      hasClock: false,
    });
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
