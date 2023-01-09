import { Component } from 'react';

import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasChild: boolean,
  clockName: string
};

export class App extends Component<{}, State> {
  state = {
    hasChild: true,
    clockName: 'Clock-0',
  };

  nameTimerId = 0;

  componentDidMount() {
    this.nameTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.nameTimerId);
    document.removeEventListener('contextmenu', this.handleLeftClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleLeftClick = () => {
    this.setState({ hasChild: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasChild: false });
  };

  render() {
    const {
      hasChild,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>Time in Greenwich, London, UK</h1>
        {hasChild && <Clock clockName={clockName} />}
      </div>
    );
  }
}
