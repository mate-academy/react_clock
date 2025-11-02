import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
  timerId: number | null;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    time: this.getCurrentTimeDisplay(),
    timerId: null,
  };

  // Поточний час у потрібному форматі
  private getCurrentTimeDisplay(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  componentDidMount(): void {
    // Запуск таймера для оновлення часу щосекунди
    const timerId = window.setInterval(() => {
      const newTimeDisplay = this.getCurrentTimeDisplay();

      // Оновлення стану та відображення часу на сторінці
      this.setState({
        time: newTimeDisplay,
      });

      // Щосекундне виведення час у консоль
      // eslint-disable-next-line no-console
      console.log(newTimeDisplay);
    }, 1000);

    // Зберігання ID таймера для подальшого очищення
    this.setState({ timerId: timerId as unknown as number });
  }

  componentWillUnmount(): void {
    // Зупинка таймера
    if (this.state.timerId !== null) {
      window.clearInterval(this.state.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
