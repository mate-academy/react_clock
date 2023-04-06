import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('click', this.clockVisible);
    document.addEventListener('contextmenu', this.clockHidden);
  }

  componentWillUnmount() {
    clearInterval(this.clockId);
    document.removeEventListener('click', this.clockVisible);
    document.removeEventListener('click', this.clockHidden);
  }

  clockVisible = () => {
    this.setState({ hasClock: true });
  };

  clockHidden = (event: MouseEvent) => {
    event.preventDefault();
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
