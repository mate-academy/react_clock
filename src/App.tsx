import React from 'react';
import { Clock } from './Clock';
import './App.scss';

type ClockState = {
  hasClock: boolean,
  name: string,
};

export class App extends React.Component<{}, ClockState> {
  state: ClockState = {
    hasClock: true,
    name: 'Clock-0',
  };

  intervalID = 0;

  componentDidMount() {
    window.addEventListener('click', this.handleContextMenu);
    window.addEventListener('contextmenu', this.handleClick);
    this.intervalID = window.setInterval(
      () => this.setState({ name: Clock.getRandomName() }), 3300,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleContextMenu);
    window.removeEventListener('contextmenu', this.handleClick);
    window.clearInterval(this.intervalID);
  }

  handleClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  handleContextMenu = () => {
    this.setState({
      hasClock: true,
    });
  };

  render() {
    const clock = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {clock.hasClock && <Clock name={clock.name} />}
      </div>
    );
  }
}
