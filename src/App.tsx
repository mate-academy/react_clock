import { Component } from 'react';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  renameTimerId: number | null = null;

  state: AppState = {
    hasClock: true, // Початково показуємо годинник (можеш змінити на false за потреби)
    clockName: 'Clock-0',
  };

  // Обробник лівого кліку (показуємо)
  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  // Обробник правого кліку (ховаємо)

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault(); // Блокуємо стандартне контекстне меню браузера
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    // Вішаємо глобальні слухачі на document
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);

    // Запускаємо таймер для зміни імені кожні 3300 мс
    this.renameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    // Знімаємо слухачі, якщо App колись буде розмонтовано
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);

    if (this.renameTimerId) {
      window.clearInterval(this.renameTimerId);
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App" style={{ padding: '20px' }}>
        <p>Left click to show, Right click to hide.</p>

        {/* Рендеримо годинник тільки якщо hasClock === true */}
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
