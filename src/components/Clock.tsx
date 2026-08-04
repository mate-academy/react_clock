import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
  };

  timerId: number | undefined;

  updateAndLogTime = () => {
    const newTime = new Date();

    this.setState({ time: newTime });
    // eslint-disable-next-line no-console
    console.log(newTime.toUTCString().slice(-12, -4));
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.updateAndLogTime();
    }, 1000);
  }

  componentDidUpdate(prevProps: { name: string }): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
