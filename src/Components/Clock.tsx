import React from 'react';

type Props = {
  setHasClock: (hasClock: boolean) => void;
  clockName: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerTime = 0;

  componentDidMount() {
    window.addEventListener('contextmenu', this.handleContextMenu);
    window.removeEventListener('click', this.handleClick);

    this.timerTime = window.setInterval(() => {
      const newTime = new Date();

      // eslint-disable-next-line no-console
      console.info(newTime.toUTCString().slice(-12, -4));
      this.setState({ time: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.addEventListener('click', this.handleClick);
    window.removeEventListener('contextmenu', this.handleContextMenu);

    clearInterval(this.timerTime);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.props.setHasClock(false);
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.props.setHasClock(true);
  };

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
