/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string
};

type State = {
  today: null | Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerIdEverySec = 0;

  componentDidMount(): void {
    this.setState({ today: new Date() });

    this.timerIdEverySec = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.name !== prevProps.name) {
      console.debug(`now: ${this.props.name}, prev: ${prevProps.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdEverySec);
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
