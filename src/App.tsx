import { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

interface State {
  clockName: string;
  id: number;
  hasClock: boolean;
}

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    id: 0,
    hasClock: true,
  };

  componentDidMount() {
    const timerId = window.setInterval(() => {
      this.getRandomName();
    }, 3300);

    this.setState({ id: timerId });

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.id);

    document.removeEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  getRandomName() {
    const value = Date.now().toString().slice(-4);

    this.setState({ clockName: `Clock-${value}` });
  }

  changeVisability() {
    this.setState(currState => ({ hasClock: !currState.hasClock }));
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}

      </div>
    );
  }
}
