import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}

class App extends Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
    today: new Date(),
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock, today } = this.state;

    return (
      <div className="App" onContextMenu={this.handleRightClick} onClick={this.handleLeftClick}>
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} today={today} />}
      </div>
    );
  }
}

export default App;
