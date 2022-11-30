import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock />}
      </div>
    );
  }
}
