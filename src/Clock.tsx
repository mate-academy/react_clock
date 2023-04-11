import React, { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  newTime = 0;

  state: Readonly<State> = {
    today: new Date(),
  };

  componentDidMount(): void {
    this.newTime = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.newTime);
  }

  handleLeftClick = () => {
    this.setState({ today: new Date() });
  };

  render(): React.ReactNode {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>

    );
  }
}
