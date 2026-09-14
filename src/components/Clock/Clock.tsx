import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  today = new Date();

  state: Readonly<State> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerIdDate = 0;

  timerIdPrint = 0;

  componentDidMount(): void {
    this.timerIdDate = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
    }, 1000);

    this.timerIdPrint = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdDate);
    window.clearInterval(this.timerIdPrint);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render(): React.ReactNode {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
