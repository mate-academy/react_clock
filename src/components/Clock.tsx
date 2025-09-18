import { Component } from 'react';

type ClockProps = { name: string };
type ClockState = { time: string };

export class Clock extends Component<ClockProps, ClockState> {
  // Inicializa o estado com a hora atual formatada
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  private timerId?: number;

  componentDidMount() {
    // Apenas inicia o intervalo de atualização
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(currentTime);

      this.setState({ time: currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId !== undefined) {
      window.clearInterval(this.timerId);
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
