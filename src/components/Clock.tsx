import React from 'react';

type State = {
  time: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId = 0;

  updateTime = () => {
    const formattedTime = new Date().toUTCString().slice(-12, -4);

    this.setState({ time: new Date() }, () => {
      window.console.log(formattedTime);
    });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
