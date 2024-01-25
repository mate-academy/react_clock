/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends React.PureComponent<Props> {
  state: State = {
    today: new Date(),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({ today: new Date() });

      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevName: Props): void {
    if (prevName.name !== this.props.name) {
      console.debug(`Renamed from ${prevName.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
