import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

type Props = {
};

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenuEvent);
    document.addEventListener('click', this.handleClickEvent);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleContextMenuEvent);
    document.removeEventListener('click', this.handleClickEvent);
  }

  handleContextMenuEvent = (event: Event) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  handleClickEvent = (event: Event) => {
    event.preventDefault();

    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
