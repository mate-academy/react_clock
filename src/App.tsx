import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
  timerId: number;
}

class App extends React.PureComponent {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    timerId: 0,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300),
    });

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
