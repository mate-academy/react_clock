import { Component } from 'react';
import './App.scss';
import { Clock } from './components';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock : boolean;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => this.handleInterval(), 3300);

    document.addEventListener('contextmenu', this.handleContextmenuClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(_:{}, prevState:State) {
    const { hasClock, clockName } = this.state;

    if (hasClock && prevState.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleContextmenuClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleInterval = () => {
    this.setState({
      clockName: getRandomName(),
    });
  };

  handleContextmenuClick = (event:MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  handleLeftClick = (event:MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock && <Clock clockName={clockName} /> }
      </div>
    );
  }
}
