import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  name: string,
};

export class App extends Component<{}, State> {
  state:Readonly<State> = {
    hasClock: true,
    name: getRandomName(),
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ name: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={this.state.name} />}
      </div>
    );
  }
}
