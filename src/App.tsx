import { Component } from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export type State = {
  hasClock: boolean
  clockName: string,
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  newName = 0;

  componentDidMount() {
    this.newName = window.setInterval(this.nameChanger, 3300);
    document.addEventListener('click', (event: MouseEvent) => {
      if (event.button === 0) {
        this.setState({ hasClock: true });
        this.newName = window.setInterval(this.nameChanger, 3300);
      }
    });

    document.addEventListener('contextmenu', event => {
      event.preventDefault();
      this.setState({ hasClock: false });
      // eslint-disable-next-line no-console
      console.log(this.state.clockName);
      clearInterval(this.newName);
    });
  }

  nameChanger = () => {
    this.setState({ clockName: getRandomName() });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <div className="App__info">
          <div>
            <strong>{this.state.clockName}</strong>
          </div>
          <div>
            {this.state.hasClock && <Clock name={this.state.clockName} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
