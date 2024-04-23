import React from 'react';

type Props = {
  toggleClock: (clock: boolean) => void;
  toggleName: (value: string) => void;
  toggleDate: (value: Date) => void;
  date: Date;
  name: string;
};

export class Clock extends React.Component<Props> {
  timerIdClock = 0;

  timerId = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handlePageClick = () => {
    this.props.toggleClock(true);
  };
  
  handlePageRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.props.toggleClock(false);
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handlePageRightClick);

    document.addEventListener('click', this.handlePageClick);

    this.timerIdClock = window.setInterval(() => {
      this.props.toggleName(this.getRandomName());
    }, 3300);

    this.timerId = window.setInterval(() => {
      this.props.toggleDate(new Date());
    }, 1000);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handlePageClick);
    document.removeEventListener('contextmenu', this.handlePageRightClick);

    window.clearInterval(this.timerIdClock);
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.log(this.props.date.toUTCString().slice(-12, -4));
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.props.date.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
