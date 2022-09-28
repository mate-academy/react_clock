import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    this.timerId;

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); 

      this.setState({ hasClock: false })
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true })
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
  
        { hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }

};
