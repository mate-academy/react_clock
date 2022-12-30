import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timeIdName = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleDocumentClick);
    document.addEventListener('click', this.handleDocumentClick);

    this.timeIdName = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.addEventListener('contextmenu', this.handleDocumentClick);
    document.addEventListener('click', this.handleDocumentClick);
    window.clearInterval(this.timeIdName);
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
        <h1>
          REACT CLOCK
        </h1>

        {hasClock && (<Clock name={clockName} />)}
      </div>
    );
  }
}
