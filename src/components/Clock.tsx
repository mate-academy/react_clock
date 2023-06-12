import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date
};

export class Clock extends Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  interval: number | undefined;

  componentDidMount(): void {
    this.interval = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    } else {
      // eslint-disable-next-line no-console
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  updateTime = (): void => {
    this.setState({ currentTime: new Date() });
  };

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
