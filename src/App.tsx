import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean;
  name: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isClockVisible: true,
    name: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
    this.timerId = window.setInterval(() => {
      this.setState({ name: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
    window.clearInterval(this.timerId);
  }

  handleClick = () => {
    this.setState({ isClockVisible: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockVisible: false });
  };

  getRandomName = () => {
    const random = Date.now().toString().slice(-4);

    return `Clock-${random}`;
  };

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          React clock
        </h1>
        <p className="App__description">
          Current time:
        </p>
        {isClockVisible && (
          <Clock name={name} />
        )}
      </div>
    );
  }
}
