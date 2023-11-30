import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type AppProps = {
  clockName: string,
  hasClock: boolean,
};


export class App extends React.Component<{}, AppProps> {

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);
  
    return `Clock-${value}`;
  }

  timerId = 0;

  addClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({hasClock: false})
  }

  setClock = () => {
    this.setState({clockName:this.getRandomName()})
  }

  deleteClock = () => {
    this.setState({hasClock: true})
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(this.setClock, 3300);
    document.addEventListener('click', this.deleteClock);
    document.addEventListener('contextmenu', this.addClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock &&
          <Clock
            clockName={this.state.clockName}
            hasClock={this.state.hasClock}
          />
        }
      </div>
    );
  };
};
