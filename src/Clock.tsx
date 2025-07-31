/* eslint-disable prettier/prettier */
import React from 'react';

interface State {
  name: string;
  today: Date;
}

export class Clock extends React.PureComponent<State> {
  state: Readonly<State> = {
    name: this.props.name,
    today: new Date(),
  };

  timerTimeId = 0;

  componentDidMount(): void {
    this.timerTimeId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {});
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<State>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }

    if (prevProps.name !== this.props.name) {
      this.setState({ clockname: this.props.name });
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerTimeId);
  }

  render(): React.ReactNode {
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
