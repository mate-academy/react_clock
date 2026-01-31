import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  timerId: number | undefined;

  timerNameId: number | undefined;

  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleRigthClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    // 1. Очищаємо попередній інтервал, щоб збити старий ритм
    window.clearInterval(this.timerId);

    this.setState({
      hasClock: true,
      today: new Date(), // Миттєво показуємо актуальний час
    });

    // 2. Запускаємо новий інтервал, щоб наступне оновлення було рівно через 1 секунду
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRigthClick);
    document.addEventListener('click', this.handleLeftClick);
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.timerNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRigthClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerNameId);
  }

  render() {
    const { hasClock, today, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock today={today} clockName={clockName} />}
      </div>
    );
  }
}
