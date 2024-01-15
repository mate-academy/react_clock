import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

class App extends Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  currentTime = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.handleShow);

    document.addEventListener('contextmenu', this.handleHide);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleHide);
    document.removeEventListener('click', this.handleShow);
  }

  handleHide = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleShow = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {
          this.state.hasClock && (
            <Clock name={this.state.clockName} />
          )
        }
      </div>
    );
  }
}

export default App;
