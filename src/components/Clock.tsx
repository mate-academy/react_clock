import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  private timer = 0;

  updateCurrentTime = () => {
    this.setState({ currentTime: new Date() });
  };

  componentDidMount(): void {
    this.timer = window.setInterval(this.updateCurrentTime, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.currentTime !== this.state.currentTime) {
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
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
