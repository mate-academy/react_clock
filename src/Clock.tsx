import { Component } from 'react';

// Описуємо типи для пропсів (те, що приходить з App)
interface ClockProps {
  name: string;
}

// Описуємо типи для стану (внутрішній час годинника)
interface ClockState {
  time: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  // Змінна для зберігання ID таймера, щоб потім його зупинити
  timerId: number | null = null;

  // Ініціалізуємо стан поточним часом
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    // Запускаємо інтервал, коли компонент з'являється на сторінці
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: currentTime });

      // Виводимо час у консоль, ігноруючи попередження лінтера
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    // Перевіряємо, чи змінилося ім'я годинника
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    // Обов'язково очищаємо інтервал при видаленні компонента,
    // інакше він продовжить працювати у фоні (витік пам'яті)
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <span className="Clock__name">{name}</span>
        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
