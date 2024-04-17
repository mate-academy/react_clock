import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

class App extends React.PureComponent {
  state = {
    currentTime: '',
    today: new Date().toString().slice(16, -42),
    clockName: 'Clock-0',
    timerId: 0,
    timer: 0,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock name={this.state.clockName} />
      </div>
    );
  }
}

export default App;
