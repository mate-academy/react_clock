import React from 'react';

interface Props {
  name: string;
}

interface State {
  clockTime: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    clockTime: new Date().toUTCString().slice(-12, -4),
  };

  changeTimeTimerId = 0;

  componentDidMount() {
    this.changeTimeTimerId = window.setInterval(() => {
      const nextTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ clockTime: nextTime });

      // eslint-disable-next-line no-console
      console.log(nextTime);
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.changeTimeTimerId);
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.clockTime}</span>
      </div>
    );
  }
}
