import { Component } from 'react';

interface ClockProps {
  name: string;
}

export class Clock extends Component<ClockProps> {
  intervalId = 0;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.forceUpdate();
      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    const oldName = prevProps.name;
    const currentName = this.props.name;

    if (currentName !== oldName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { name } = this.props;
    const currentTime = new Date().toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
