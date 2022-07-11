import { Component, ReactNode } from 'react';
import './App.scss';
import { Clock } from './clock';

type State = {
  hasClock: boolean,
  name: string,
};

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    name: getRandomName(),
  };

  interval = 0;

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    this.interval = window.setInterval(() => {
      this.setState({ name: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(): ReactNode {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="clock">
          {hasClock && <Clock name={this.state.name} />}
        </div>
      </div>
    );
  }
}

export default App;
