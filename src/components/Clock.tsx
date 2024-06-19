import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  public readonly state: State = {
    today: new Date(),
  };

  timerIdDate = 0;
  //#region handles

  handleTimer() {
    this.timerIdDate = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  handleClearTimer() {
    window.clearInterval(this.timerIdDate);
  }
  //#endregion

  componentDidUpdate(prevProps: Props): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  }

  componentDidMount(): void {
    this.handleTimer();
  }

  componentWillUnmount(): void {
    this.handleClearTimer();
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
