import React, { ReactNode } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  timerId: number | undefined;

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  }
  // const today = new Date();
  // let clockName = 'Clock-0';

  // This code starts a timer

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  }

  componentDidMount() {
    const timerId = window.setInterval(() => {
      this.setState({clockName: getRandomName()})
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick)
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
    }
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render(): React.ReactNode {

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName}/>}
      </div>
    );
  }
};
