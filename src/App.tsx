import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleDocumentContextMenu);
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>) {
    const newState = this.state.clockName;

    // eslint-disable-next-line
    console.log(`Renamed from ${prevState.clockName} to ${newState}`);
  }

  handleDocumentClick = () => {
    this.setState({ hasClock: true });
  };

  handleDocumentContextMenu = () => {
    this.setState({ hasClock: false });
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
