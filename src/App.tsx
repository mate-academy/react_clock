import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
  clockName: string
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleDocumentClick);
    document.addEventListener('click', this.handleDocumentClick);

    this.timerIdName = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleDocumentClick);
    document.removeEventListener('click', this.handleDocumentClick);
    window.clearInterval(this.timerIdName);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleDocumentClick = (event: MouseEvent) => {
    if (event.type === 'click') {
      this.setState({ hasClock: true });
    }

    if (event.type === 'contextmenu') {
      event.preventDefault();
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (<Clock name={clockName} />)}
      </div>
    );
  }
}
