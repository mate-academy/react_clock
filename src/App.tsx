import { Component } from 'react';

import './App.scss';

import { Clock } from './components/Clock';

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerId = 0;

  componentDidMount() {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });

      document.addEventListener('click', () => {
        this.setState({ hasClock: true });
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.nameTimerId);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} /> }
      </div>
    );
  }
}
