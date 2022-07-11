import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean,
  name: string,
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    name: `Clock-${Math.random().toString().slice(2, 6)}`,
  };

  componentDidMount() {
    setInterval(() => {
      const randomName = Math.random().toString().slice(2, 6);

      this.setState({ name: `Clock-${randomName}` });
    }, 3300);

    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });
  }

  componentDidUpdate() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock, name } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>

        {hasClock && <Clock name={name} />}
      </div>
    );
  }
}

export default App;
