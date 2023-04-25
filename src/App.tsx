import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  name: string,
};

export class App extends Component <{}, State> {
  state = {
    hasClock: true,
    name: 'Clock-0',
  };

  static get randomName(): string {
    return `Clock-${Date.now().toString().slice(-4)}`;
  }

  timerId = 0;

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextmenu);

    this.timerId = window.setInterval(() => {
      this.setState({ name: App.randomName });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    document.removeEventListener('mousedown', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextmenu);
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.name} />}
      </div>
    );
  }
}
