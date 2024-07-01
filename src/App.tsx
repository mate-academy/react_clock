import React from 'react';
import './App.scss';
import { Clock } from './Clock';
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};
type Props = {};
export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  newDate = new Date();

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.clockNameUpdaterId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    clearInterval(this.clockNameUpdaterId);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  timerId: number | undefined;

  clockNameUpdaterId: number | undefined;

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
