import { Component } from 'react';
import './App.scss';
import Clock from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string
};

class App extends Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.hasClock && <Clock clockName={this.state.clockName} />}
        </span>
      </div>
    );
  }
}

export default App;
