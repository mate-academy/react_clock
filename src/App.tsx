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
    document.addEventListener('click', this.handleLeftMouse);
    document.addEventListener('contextmenu', this.handleRightMouse);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftMouse);
    document.removeEventListener('contextmenu', this.handleRightMouse);
  }

  handleLeftMouse = () => {
    this.setState({ hasClock: true });
  };

  handleRightMouse = (event: MouseEvent) => {
    this.setState({ hasClock: false });
    event.preventDefault();
  };

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
