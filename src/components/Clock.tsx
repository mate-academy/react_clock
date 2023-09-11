import React from 'react';

type State = {
  time: Date;
};

type Props = {
  setHasClock: (hasClock: boolean) => void;
  name: string;
};

export class Clock extends React.PureComponent<Props, State> {
  state = {
    time: new Date(),
  };

  timerIdForTime = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);

    this.timerIdForTime = window.setInterval(() => {
      const newTime = new Date();

      // eslint-disable-next-line no-console
      console.info(newTime.toUTCString().slice(-12, -4));
      this.setState({ time: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    document.addEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);

    clearInterval(this.timerIdForTime);
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
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
