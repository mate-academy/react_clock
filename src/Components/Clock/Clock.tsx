import React from 'react';

interface Props {
  name: number
  hasClock: boolean
}

interface State {
  today: Date,
}

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from Clock-${prevProps.name} to Clock-${this.props.name}`);
    }

    if (prevProps.hasClock !== this.props.hasClock) {
      if (this.props.hasClock) {
        this.timerId = window.setInterval(() => {
          this.setState({ today: new Date() });
          // eslint-disable-next-line no-console
          console.info(this.state.today.toUTCString().slice(-12, -4));
        }, 1000);
      } else {
        window.clearInterval(this.timerId);
      }
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {`Clock-${name}`}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
