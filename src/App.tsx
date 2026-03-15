import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};
type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timer = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleRightClickEvent = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClickEvent = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleLeftClickEvent);
    document.addEventListener('contextmenu', this.handleRightClickEvent);

    this.timer = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftClickEvent);
    document.removeEventListener('contextmenu', this.handleRightClickEvent);
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
