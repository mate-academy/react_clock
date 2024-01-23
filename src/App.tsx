import { PureComponent } from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './utils';

interface State {
  hasClock: boolean,
  clockName: string,
}

export class App extends PureComponent {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerId = 0;

  componentDidMount(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
