import { Component } from 'react';
import { Context } from 'vm';
import './App.scss';

import { Clock } from './clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  threeSecondTimer = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleclick);

    this.threeSecondTimer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.threeSecondTimer);

    document.removeEventListener('contextmenu', this.handleContextMenu);

    document.removeEventListener('click', this.handleclick);

    clearInterval(this.threeSecondTimer);
  }

  handleContextMenu = (event: Context) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleclick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
