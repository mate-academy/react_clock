import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    clockName: this.props.name,
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.setState({
      today: new Date(),
    });

    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });

      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.name !== prevProps.name) {
      this.onUpdate((newName: string) => {
        this.setState({
          clockName: newName,
        });
      });

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  onUpdate = (callback: (newName: string) => void) => {
    const newName: string = this.props.name;

    callback(newName);
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
