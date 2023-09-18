import React from 'react';

type State = {
  currentDate: Date;
};

type Props = {
  setHasClock: (hasClock: boolean) => void;
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentDate: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);

    this.timerId = window.setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line no-console
      console.info(this.getDateString(date));
      this.setState({ currentDate: date });
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

    clearInterval(this.timerId);
  }

  // eslint-disable-next-line class-methods-use-this
  getDateString(date: Date): string {
    return date.toUTCString().slice(-12, -4);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.props.setHasClock(false);
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.props.setHasClock(true);
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getDateString(this.state.currentDate)}
        </span>
      </div>
    );
  }
}
