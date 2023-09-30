import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  showClockName = 0;

  componentDidMount(): void {
    this.showClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handlerContextMenu);
    document.addEventListener('click', this.handlerOnClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.showClockName);
    document.removeEventListener('contextmenu', this.handlerContextMenu);
    document.removeEventListener('click', this.handlerOnClick);
  }

  handlerContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handlerOnClick = () => {
    this.setState({ hasClock: true });
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
