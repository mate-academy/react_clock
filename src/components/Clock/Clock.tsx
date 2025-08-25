import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  private timerId?: number;

  dateTimerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);

    this.dateTimerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dateTimerId);

    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
