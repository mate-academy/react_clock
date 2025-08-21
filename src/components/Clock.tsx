import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  currentTime: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  private timerId: number = 0;

  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  updateTime = () => {
    const newTime = new Date().toUTCString().slice(-12, -4);
    this.setState({ currentTime: newTime });

    // eslint-disable-next-line no-console
    console.log(newTime);
  };

  componentDidMount() {
    // Почати таймер тільки коли компонент змонтований
    this.timerId = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    // Вивести повідомлення про зміну імені
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    // Очистити таймер коли компонент демонтується
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
