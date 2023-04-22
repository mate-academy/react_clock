/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  handleContextMenuEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClickEvent = () => {
    this.setState({ hasClock: true });
  };

  handleKeyPress = () => {
    this.setState(prevState => ({ hasClock: !prevState.hasClock }));
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div
        className="App"
        onContextMenu={this.handleContextMenuEvent}
        onClick={this.handleClickEvent}
        onKeyPress={this.handleKeyPress}
        role="checkbox"
        aria-checked={hasClock}
        tabIndex={0}
      >
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
