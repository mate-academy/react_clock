import React from 'react';

interface Props {
  clockName: string,
}

type State = {
  today: Date,
  hasClock: boolean,
};

export class Clock extends React.PureComponent<Props> {
  state: State = {
    today: new Date(),
    hasClock: true,
  };

  timerId = 0;

  addSeconds = 1;

  componentDidMount(): void {
    this.setState({ today: new Date() });
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      if (this.state.hasClock) {
        // eslint-disable-next-line
        console.info(this.state.today.toUTCString().slice(-12, -4));
      }
    }, 1000);

    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.clickHandle);
  }

  componentDidUpdate(prevProps: Props, prevState: Readonly<{}>): void {
    if (prevProps.clockName
      !== this.props.clockName
      && prevState
      && this.state.hasClock
    ) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.clickHandle);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  clickHandle = () => {
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { clockName } = this.props;
    const { hasClock, today } = this.state;

    if (hasClock) {
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

    return null;
  }
}
