import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  date: string;
}

const today = () => new Date().toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    date: today(),
  };

  timerId!: number | null;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const date = today();

      // eslint-disable-next-line react/no-unused-state
      this.setState({ date });
      // eslint-disable-next-line no-console
      console.info(date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today()}
        </span>
      </div>
    );
  }
}
