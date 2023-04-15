import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

// Global state of Root component
type State = {
  clockVisible: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockVisible: true,
    clockName: 'Clock-0',
  };

  // Creates a class property "timerID" and assigns it 0
  timerID = 0;

  componentDidMount() {
    // Every 3s change state of `clockName` by randomly generated string
    this.timerID = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    // Event fired when user right-clicks on the page -> exec. `removeClockComponent` method
    document.addEventListener('contextmenu', this.removeClockComponent);

    document.addEventListener('click', this.addClockComponent);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID);

    document.removeEventListener('contextmenu', this.removeClockComponent);
    document.removeEventListener('click', this.addClockComponent);
  }

  addClockComponent = () => {
    this.setState({ clockVisible: true });
  };

  // MouseEvent is built-in Typescript type representing a mouse event in the web browser
  removeClockComponent = (event: MouseEvent) => {
    // Prevent opening of the context menu
    event.preventDefault();
    this.setState({ clockVisible: false });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.clockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}
