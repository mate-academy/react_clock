import React from 'react';
import './App.scss';

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

    this.setState({
      timer: setInterval(() => {
        this.setState({ currentTime: new Date().toString().slice(16, -42) });
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
    clearInterval(this.state.timer);
  }

  render() {
    const { currentTime, clockName } = this.state;

    // eslint-disable-next-line no-console
    console.log(currentTime);

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>
          {' time is '}
          <span className="Clock__time">{currentTime}</span>
        </div>
      </div>
    );
  }
}

export default App;
