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
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  newName = 0;

  componentDidMount() {
    const { clockName } = this.state;

    this.newName = window.setInterval(this.nameChanger, 3300);
    document.addEventListener('click', (event: MouseEvent) => {
      if (event.button === 0) {
        this.setState({ hasClock: true });
      }
    });

    document.addEventListener('contextmenu', event => {
      event.preventDefault();
      this.setState({ hasClock: false });
      // eslint-disable-next-line no-console
      console.log(clockName);
      clearInterval(this.newName);
    });
  }

  nameChanger = () => {
    this.setState({ clockName: getRandomName() });
  };

  render() {
    const { clockName } = this.state;
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <div className="App__info">
          <div>
            <strong>{clockName}</strong>
          </div>
          <div>
            {hasClock && <Clock name={clockName} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
