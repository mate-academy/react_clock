import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  date: string;
}

const sliceTimeString = (date: Date): string => {
  return date.toUTCString().slice(-12, -4);
};

export class Clock extends React.Component<Props, State> {
  currentDate = new Date();

  state = {
    date: sliceTimeString(this.currentDate),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentDate = new Date();
      const currentStringDate = sliceTimeString(currentDate);

      this.setState({ date: currentStringDate });
      // eslint-disable-next-line
      console.info(currentStringDate);
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
