import React from 'react';

type State = {
  currentTime: string;
};

type Props = {
  clockName: string;
  setHasClock: (value: boolean) => void;
};

export class Clock extends React.PureComponent<Props, State> {
  timerId: number | null = null;

  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime });
      // eslint-disable-next-line no-console
      console.info(currentTime);
    }, 1000);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleLeftClick.bind(this));
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    this.props.setHasClock(false);
  };

  handleLeftClick = (): void => {
    this.props.setHasClock(true);
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime}
        </span>
      </div>
    );
  }
}
