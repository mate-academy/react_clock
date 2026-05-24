import { Component } from 'react';

interface Props {
  name: string;
}

interface State {
  today: string;
}

export class Clock extends Component<Props, State> {
  private timerId: number | null = null;

  state: Readonly<State> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date().toUTCString().slice(-12, -4);

      this.setState({ today });
      // eslint-disable-next-line no-console
      console.log(today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
