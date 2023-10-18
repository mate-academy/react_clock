import React from 'react';

type State = {
  currentTime: Date,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
      this.showTime();
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  showTime = () => {
    // eslint-disable-next-line no-console
    console.info(this.state.currentTime.toUTCString().slice(-12, -4));
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render(): React.ReactNode {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
