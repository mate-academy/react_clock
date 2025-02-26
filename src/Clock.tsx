import React from 'react';
interface ClockProps {
  name: string;
}

export class Clock extends React.Component<ClockProps> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };
  timerId: number = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);
      // eslint-disable-next-line no-console
      console.log(newTime);
      this.setState({ today: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>) {
    if (prevProps.name !== this.props.name){
    // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
