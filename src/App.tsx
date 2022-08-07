import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('click', () => this.setState({ hasClock: true }));
    document.addEventListener('contextmenu', (event) => (
      // eslint-disable-next-line no-sequences
      event.preventDefault(),
      this.setState({ hasClock: false })));
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (<Clock />)}
      </div>
    );
  }
}
