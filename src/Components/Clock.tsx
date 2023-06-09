import React from 'react';

interface State {
  currentTime: Date;
}

interface Props {
  clockName: string;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  dateTimerId: number | null = null;

  componentDidMount(): void {
    this.dateTimerId = this.startDateTimer();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }

    if (prevState.currentTime !== this.state.currentTime) {
      // eslint-disable-next-line no-console
      console.info(this.getUtcDate());
    }
  }

  componentWillUnmount() {
    if (this.dateTimerId) {
      window.clearInterval(this.dateTimerId);
    }
  }

  getUtcDate() {
    return this.state.currentTime.toUTCString().slice(-12, -4);
  }

  startDateTimer = () => (
    window.setInterval(() => this.setState({ currentTime: new Date() }), 1000)
  );

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getUtcDate()}
        </span>
      </div>
    );
  }
}
