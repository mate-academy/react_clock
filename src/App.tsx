import { Component } from 'react';
import { Clock } from './Clock/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  name: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state = {
    name: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);

    document.addEventListener('contextmenu', this.handleDocumentContextMenu);

    this.timerId = window.setInterval(() => {
      this.setState({
        name: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('click', this.handleDocumentContextMenu);
  }

  handleDocumentClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  handleDocumentContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  render() {
    const { name, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={name} />}
      </div>
    );
  }
}
