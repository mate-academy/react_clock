import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {

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
