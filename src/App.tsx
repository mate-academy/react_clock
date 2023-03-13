import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({
        hasClock: false,
      });
    });

    document.addEventListener('click', (event) => {
      event.preventDefault();

      this.setState({
        hasClock: true,
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
