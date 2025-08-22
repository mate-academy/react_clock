// src/App.tsx
import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  private renameIntervalId: number | null = null;

  componentDidMount(): void {
    // Обновление имени каждые 3.3 секунды
    this.renameIntervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    // Скрытие Clock при правом клике
    document.addEventListener('contextmenu', this.handleContextMenu);
    // Показ Clock при левом клике
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    // Очистка интервалов и слушателей
    if (this.renameIntervalId) {
      window.clearInterval(this.renameIntervalId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  private handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault(); // Запрет контекстного меню
    this.setState({ hasClock: false });
  };

  private handleClick = (): void => {
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
