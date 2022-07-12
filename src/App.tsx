/* eslint-disable no-console */
import { Component } from 'react';
import { Clock } from './components/Clock/Clock';
import { getRandomName } from './Functions/RandomName';

import './App.scss';

type State = {
  hasChild: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    hasChild: false,
    clockName: getRandomName(),
  };

  newName = 0;

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ hasChild: true });
    });

    document.addEventListener('contextmenu', () => {
      this.setState({ hasChild: false });
    });

    this.newName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: never, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.newName);
  }

  render() {
    const { hasChild } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="Clock">
          {hasChild && <Clock clockName={this.state.clockName} />}
        </div>
      </div>
    );
  }
}

export default App;
