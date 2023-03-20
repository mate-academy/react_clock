import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string,
  clockVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: '0',
    clockVisible: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ clockVisible: false });
    });
    document.addEventListener('click', (event) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ clockVisible: true });
    });
    // This code starts a timer
    window.setInterval(() => {
      this.getRandomName();
    }, 3300);
  }

  toggleClock = () => {
    this.setState(
      (prevState) => {
        return { clockVisible: !prevState.clockVisible };
      },
    );
  };

  getRandomName = () => {
    const newName = Date.now().toString().slice(-4);

    this.setState({
      clockName: newName,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          React clock
        </h1>
        {this.state.clockVisible
        && <Clock clockName={this.state.clockName} />}

      </div>
    );
  }
}
