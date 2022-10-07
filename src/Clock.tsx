/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string,
};
type State = {
  currentTime: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Props,
  ): void {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
