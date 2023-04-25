import { Component } from 'react';

import './App.scss';

import { Clock } from './components/Clock';

export class App extends Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });

      document.addEventListener('click', () => {
        this.setState({ hasClock: true, clockName: 'Clock-0' });
      });
    });
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
