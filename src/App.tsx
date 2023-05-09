import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isContextmenu: boolean,
};

export class App extends Component<{}, State> {
  state = {
    isContextmenu: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.setState({ isContextmenu: false });
    });

    document.addEventListener('click', () => {
      this.setState({ isContextmenu: true });
    });
  }

  render() {
    const { isContextmenu } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isContextmenu && (<Clock />)}
      </div>
    );
  }
}
