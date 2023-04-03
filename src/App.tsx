import { Component } from 'react';
import './App.scss';
import { CLock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRigthClick);

    this.clockNameId = window.setInterval(this.clockNameChanger, 3300);
  }

  clockNameChanger = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleLeftClick = (): void => {
    this.setState({ hasClock: true });
  };

  handleRigthClick = (e: Event): void => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          hasClock && (<CLock clockName={clockName} />)
        }
      </div>
    );
  }
}
