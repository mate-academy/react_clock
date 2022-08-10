import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerIdT = 0;

  componentDidMount() {
    this.timerIdT = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.handleDocumentContextMenu);
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    clearInterval(this.timerIdT);
    document.removeEventListener('contextmenu', this.handleDocumentContextMenu);
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = () => {
    this.setState({ hasClock: true });
  };

  handleDocumentContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    // eslint-disable-next-line no-console
    console.clear();
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
