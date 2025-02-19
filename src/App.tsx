/* eslint-disable */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

class App extends React.Component<{}, AppState> {
  private timerId: number | undefined;
  private nameUpdateId: number | undefined;
  private clockRef: React.RefObject<Clock>;

  constructor(props: {}) {
    super(props);
    this.state = {
      hasClock: true,
      clockName: 'Clock-0',
    };
    this.clockRef = React.createRef<Clock>();
  }

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu as EventListener);
    document.addEventListener('click', this.handleClick as EventListener);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: App.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu as EventListener);
    document.removeEventListener('click', this.handleClick as EventListener);
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
    if (this.nameUpdateId) {
      window.clearInterval(this.nameUpdateId);
    }
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  handleClick = () => {
    this.setState({ hasClock: true }, () => {
      if (this.clockRef.current) {
        this.clockRef.current.updateTime();
      }
    });
  }

  private static getRandomName(): string {
    const value = Date.now().toString().slice(-4);
    return `Clock-${value}`;
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock ref={this.clockRef} name={this.state.clockName} />}
      </div>
    );
  }
}

export { App };
