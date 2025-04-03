import './App.scss';
import { Component } from 'react';
import Clock from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleClickLeft);
    document.addEventListener('contextmenu', this.handleClickRight);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleClickRight);
    document.removeEventListener('click', this.handleClickLeft);

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  handleClickRight = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClickLeft = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
