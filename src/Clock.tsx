import React from 'react';

interface Props {
  name: string;
}

interface State {
  time: Date;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  interval: number | undefined;

  componentDidMount(): void {
    this.interval = window.setInterval(this.newTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.info(this.state.time.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.interval);
  }

  newTime = () => {
    this.setState({ time: new Date() });
  };

  render() {
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
