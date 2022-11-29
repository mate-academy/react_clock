import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextmenuEvent);
    document.addEventListener('click', this.handleClickEvent);

    this.clockNameId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextmenuEvent);
    document.removeEventListener('click', this.handleClickEvent);
    window.clearInterval(this.clockNameId);
  }

  handleClickEvent = () => {
    this.setState({ hasClock: true });
  };

  handleContextmenuEvent = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (

      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
