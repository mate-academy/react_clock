import React from 'react';

type State = {
  currentTime: Date,
  timerId: number | undefined,
  nameTimerId: number | undefined,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
    timerId: undefined,
    nameTimerId: undefined,
  };

  componentDidMount(): void {
    this.setState({
      timerId: window.setInterval(() => {
        this.setState({ currentTime: new Date() });
        this.showTime();
      }, 1000),
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerId);
    window.clearInterval(this.state.nameTimerId);
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
