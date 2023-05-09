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
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ isContextmenu: false });
  };

  handleClick = () => {
    this.setState({ isContextmenu: true });
  };

  render() {
    const { isContextmenu } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isContextmenu && <Clock />}
      </div>
    );
  }
}
