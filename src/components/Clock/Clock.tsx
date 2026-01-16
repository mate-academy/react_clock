import React from 'react';

interface ClockProps {
  name: string;
}

export class Clock extends React.Component<ClockProps> {
  state = {
    today: new Date(),
  };

  private timerId: number = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ today: newDate });

      // eslint-disable-next-line no-console
      console.log(newDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
