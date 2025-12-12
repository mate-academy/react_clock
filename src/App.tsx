import React from 'react';
import './App.scss';
import { Clock } from './Clock';
//teste
type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  counter = 0;

  componentDidMount(): void {
    // Atualiza clockName a cada 3300ms
    this.timerId = window.setInterval(() => {
      const oldName = this.state.clockName;

      this.counter += 1;
      const newName = `Clock-${this.counter * 3300}`;

      this.setState({ clockName: newName });

      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${newName}`);
    }, 3300);

    // Ocultar Clock no clique direito
    document.addEventListener('contextmenu', this.handleRightClick);

    // Mostrar Clock no clique esquerdo
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
