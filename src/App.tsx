import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';
import { getRandomName } from './function';

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

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRigthClick);
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
          hasClock && (<Clock clockName={clockName} />)
        }
      </div>
    );
  }
}
