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
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextmenu);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>) {
    const prevName = prevState.clockName;
    const newName = this.state.clockName;

    if (prevName !== newName) {
      // eslint-disable-next-line
      console.log(`Renamed from ${prevName} to ${newName}`);
    }
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextmenu = () => {
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (<Clock clockName={clockName} />)}
      </div>
    );
  }
}
